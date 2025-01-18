import {
  useReactTable,
  ColumnDef,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
} from '@tanstack/react-table';
import Button from '../CustomButton';
import ToggleButton from '../CustomToggleButton';
import { getStateById, deleteStateById, getAllState, postCreateState, } from '../../services/masterManagement.services';
import { useState, useEffect } from 'react';
import { FormProvider, useForm, UseFormReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Modal from "../CustomModal"
import CustomButton from '../CustomButton';
import Controller from '../FormController';
import {
  EditIcon, BinIcon,
  LanguageTranslateIcon,
} from '../LogoComponents';
import _ from 'lodash';
import { State_ID_Options } from '../../Fixtures/Constants/RationCardRegistration';
import { useIsOpen } from '../../pages/MasterManagement/MasterContext';

// type DataTableProps<T> = {
//   data: T[];
//   columns: ColumnDef<T>[];
//   updateMyData: UpdateMyData;
// };
const dummyData = [
  { id: 1, code: '001', name: 'John Doe', shortName: 'JD', status: true },
  { id: 2, code: '201', name: 'Jane Smith', shortName: 'JS', status: false },
  { id: 3, code: '003', name: 'Mike Johnson', shortName: 'MJ', status: true },
  { id: 4, code: '004', name: 'Emily Davis', shortName: 'ED', status: false },
];

export const stateSchema = z.object({
  id: z.any().optional(),
  stateName: z.string(),
  stateNameLl: z.string(),
  stateShortName: z.string(),
  ut: z.boolean(),
  availableFpsMobile: z.boolean(),
  centralPgrmsState: z.boolean(),
  code: z.string(),
});

// <T,>({ data, columns }: DataTableProps<T>)
const CustomDataTable = () => {
  const { modalIsOpen, setIsOpen } = useIsOpen();
  const [data, setData] = useState(dummyData);
  const [currentSelectedStateId, setCurrentSelectedStateId] = useState(-1);

  const columns: ColumnDef<(typeof dummyData)[0]>[] = [
    {
      accessorKey: 'id',
      header: 'Sl.No',
    },
    {
      accessorKey: 'code',
      header: 'Code',
    },
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'shortName',
      header: 'Short Name',
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => (
        <ToggleButton
          isToggled={row.original.status}
          rowId={row.original.id}
          onToggle={onStatusChangeHandler}
        />
      ),
    },
    {
      accessorKey: 'actions',
      header: 'Actions',
      cell: ({ row }) => <Actions rowId={row.original.id} />,
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    // updateMyData,
  });

  const stateDefaultValues: z.infer<typeof stateSchema> = {
    id: '',
    stateName: '',
    stateNameLl: '',
    stateShortName: '',
    code: '',
    ut: false,
    availableFpsMobile: false,
    centralPgrmsState: false,
  };

  const methods: UseFormReturn<any> = useForm<z.infer<typeof stateSchema>>({
    resolver: zodResolver(stateSchema),
    mode: 'all',
    defaultValues: stateDefaultValues,
  });

  async function openModal() {
    try {
      if (currentSelectedStateId !== -1) {
        const selectedStateData = await getStateById(currentSelectedStateId);
        if (!_.isEmpty(selectedStateData)) {
          methods.setValue('id', selectedStateData.id || '');
          methods.setValue('stateName', selectedStateData.stateName || '');
          methods.setValue('stateNameLl', selectedStateData.stateNameLl || '');
          methods.setValue(
            'stateShortName',
            selectedStateData.stateShortName || ''
          );
          methods.setValue('ut', !!selectedStateData.ut);
          methods.setValue(
            'availableFpsMobile',
            !!selectedStateData.availableFpsMobile
          );
          methods.setValue(
            'centralPgrmsState',
            !!selectedStateData.centralPgrmsState
          );
          methods.setValue('code', selectedStateData.stateLgdCode);
        }
      }

      setIsOpen("State");
    } catch (error) {
      console.error('Error fetching state data:', error);
    }
  }
  async function getAllStatesData() {
    const res = await getAllState(false);
    const resFormatted = res.map((data: any) => ({
      id: data.id,
      code: data.stateLgdCode,
      name: data.stateName,
      nameLl: data.stateNameLl,
      shortName: data.stateShortName,
      status: data.active,
      remarks: data.remark,
      centralPGRMSState: data.centralPGRMSState,
      ut: data.ut,
      availableFpsMobile: data.availableFpsMobile,
      centralPgrmsState: data.centralPgrmsState,
    }));
    setData(resFormatted);
  }
  const Actions = ({ rowId }: { rowId: number }) => {
    const handleEditClick = () => {
      setCurrentSelectedStateId(rowId);
      openModal();
    };

    const handleDeleteClick = async () => {
      setCurrentSelectedStateId(rowId);
      console.log('Delete clicked for row ID:', rowId);
      try {
        await deleteStateById(rowId);
        getAllStatesData();
      } catch (error: any) {
        console.log('error', error);
      }
    };

    const handleTranslateClick = () => {
      setCurrentSelectedStateId(rowId);
      console.log('Translate clicked for row ID:', rowId);
    };

    return (
      <div className="flex space-x-2">
        <button
          className="text-blue-500 hover:text-blue-700"
          onClick={handleEditClick}
        >
          <EditIcon height={16} width={16} />
        </button>
        <button
          className="text-red-500 hover:text-red-700"
          onClick={handleDeleteClick}
        >
          <BinIcon />
        </button>
        <button
          className="text-yellow-500 hover:text-yellow-700"
          onClick={handleTranslateClick}
        >
          <LanguageTranslateIcon height={16} width={16} />
        </button>
      </div>
    );
  };

  async function onSubmitHandler(val: any) {
    const reqObj = {
      id: val.id || '',
      stateName: val.stateName,
      stateNameLl: val.stateNameLl,
      stateShortName: val.stateShortName,
      ut: val.ut,
      availableFpsMobile: val.availableFpsMobile,
      centralPgrmsState: val.centralPgrmsState,
      stateLgdCode: val.code,
      active: val.active === false ? false : true,
    };
    try {
      await postCreateState(reqObj);
      getAllStatesData();
      methods.reset(stateDefaultValues);
      setCurrentSelectedStateId(-1);
      setIsOpen("");
    } catch (error: any) {
      console.log('something went wrong', error);
    }
  }

  function onStatusChangeHandler(newState: boolean, rowId?: string | number) {
    const changedData: any = data.find((state: any) => state.id === rowId);
    if (!_.isEmpty(changedData)) {
      const reqObj = {
        id: changedData.id,
        stateName: changedData.name,
        stateNameLl: changedData.nameLl,
        stateShortName: changedData.shortName,
        ut: changedData.ut,
        availableFpsMobile: changedData.availableFpsMobile,
        centralPgrmsState: changedData.centralPgrmsState,
        code: changedData.code,
        active: newState,
      };
      onSubmitHandler(reqObj);
    }
  }

  function afterOpenModal() {
    openModal();
  }

  function closeModal() {
    setIsOpen("");
  }

  function onError(data: any) {
    console.log('data', data);
  }
  useEffect(() => {
    (async () => {
      getAllStatesData();
    })();
  }, []);
  return (
    <>
      <table className="w-full border-collapse border border-gray-300 mt-4">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border border-gray-300 p-2 bg-gray-200 text-left"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border border-gray-300 p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <section className="flex pt-4 justify-center">
        <Button
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </Button>
        <Button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </Button>
        <select
          className="bg-white-400 p-0 px-4"
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {/* {[1, 2, 3, 4, 5].map((pageSize) => ( */}
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
        <Button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </Button>
        <Button
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </Button>
      </section>

      <Modal
        isOpen={modalIsOpen === "State"}
        onOpen={afterOpenModal}
        closeModal={closeModal}
        contentLabel="Example Modal"
      >
        <div className="model-content-container relative">
          <CustomButton
            onClick={closeModal}
            className="aspect-square absolute top-1 right-1"
          >
            <strong>x</strong>
          </CustomButton>
          <h2 className="mt-2 text-[1.5rem] font-bold">
            Village Management System
          </h2>
          <FormProvider {...methods}>
            <form
              className="mt-8"
              onSubmit={methods.handleSubmit(onSubmitHandler, onError)}
            >
              <section className="field-containers w-full grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4">
                <Controller
                  label="Village Name (in Local language)"
                  required={true}
                  name="villageNameLl"
                  type="text"
                  placeholder="Please enter Village name in Local language"
                />
                <Controller
                  label="Village Name (in English language)"
                  required={true}
                  name="villageName"
                  type="text"
                  placeholder="Please enter Village name in English"
                />
                <Controller
                  label="Village Language Code"
                  required={true}
                  name="villagesLgdCode"
                  type="text"
                  placeholder="Please enter Village Language Code"
                />
                <Controller
                  label="State ID"
                  required={true}
                  name="stateID"
                  type="dropdown"
                  options={State_ID_Options}
                  placeholder="Please enter State ID"
                />
                <Controller
                  label="Remarks"
                  required={true}
                  name="remarks"
                  type="text"
                  placeholder="Please enter remarks"
                />
              </section>
              <footer className="flex gap-2 w-full pt-4">
                <CustomButton
                  type="contained"
                  variant="primary"
                  buttonType="submit"
                  fullWidth={true}
                >
                  Save
                </CustomButton>
              </footer>
            </form>
          </FormProvider>
        </div>
      </Modal>
    </>
  );
};

export default CustomDataTable;
