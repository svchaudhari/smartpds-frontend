import {
  useReactTable,
  ColumnDef,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
} from '@tanstack/react-table';
import Button from '../../CustomButton';
import {
  getStateById,
  deleteStateById,
  postCreateState,
} from '../../../services/masterManagement.services';
import { useState, useEffect } from 'react';
import {
  FormProvider,
  useForm,
  useFormContext,
  UseFormReturn,
  useWatch,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Modal from '../../CustomModal';
import CustomButton from '../../CustomButton';
import Controller from '../../FormController';
import { EditIcon, BinIcon, LanguageTranslateIcon } from '../../LogoComponents';
import _ from 'lodash';
import {
  User_Status,
} from '../../../Fixtures/Constants/RationCardRegistration';
import { useIsOpen } from '../../../pages/MasterManagement/MasterContext';

// type DataTableProps<T> = {
//   data: T[];
//   columns: ColumnDef<T>[];
//   updateMyData: UpdateMyData;
// };
const dummyData = [
  {
    id: 1,
    department: 'Dept 1',
    designation: 'Desg 1',
    name: 'John Doe',
    email: 'john@gmail.com',
    mobile: '8989980000',
    date: '09/10/2024',
    status: 'Complete',
  },
  {
    id: 2,
    department: 'Dept 2',
    designation: 'Desg 2',
    name: 'Jane Smith',
    email: 'jane@gmail.com',
    mobile: '8989980000',
    date: '09/10/2024',
    status: 'Pending',
  },
  {
    id: 3,
    department: 'Dept 3',
    designation: 'Desg 3',
    name: 'Mike Johnson',
    email: 'mike@gmail.com',
    mobile: '8989980000',
    date: '09/10/2024',
    status: 'Processing',
  },
  {
    id: 4,
    department: 'Dept 4',
    designation: 'Desg 4',
    name: 'Emily Davis',
    email: 'emily@gmail.com',
    mobile: '8989980000',
    date: '09/10/2024',
    status: 'Pending',
  },
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

  const StateSelectionBox = ({ rowId }: { rowId: number }) => {
    const { control } = useFormContext();
    const stateIdStatus = useWatch({ control, name: 'stateID' });
    const handleEditClick = () => {
      console.log('stateIdStatus', stateIdStatus, rowId);
    };
    return (
      <Controller
        // label="State ID"
        required={true}
        name="stateID"
        type="dropdown"
        options={User_Status}
        onChange={handleEditClick}
        placeholder="Please enter State ID"
      />
    );
  };

  const columns: ColumnDef<(typeof dummyData)[0]>[] = [
    {
      accessorKey: 'id',
      header: 'Sl.No',
    },
    {
      id: 'department',
      accessorKey: 'department',
      header: 'Dept.',
    },
    {
      accessorKey: 'designation',
      header: 'Designation',
    },
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      accessorKey: 'mobile',
      header: 'Mobile No.',
    },
    {
      accessorKey: 'date',
      header: 'Date',
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => (
        <FormProvider {...methods}>
          <StateSelectionBox rowId={row.original.id} />
        </FormProvider>
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

      setIsOpen('State');
    } catch (error) {
      console.error('Error fetching state data:', error);
    }
  }
  async function getAllStatesData() {
    // const res = await getAllState(false);
    const resFormatted = dummyData;
    // const resFormatted = res.map((data: any) => ({
    //     id: data.id,
    //     code: data.stateLgdCode,
    //     name: data.stateName,
    //     nameLl: data.stateNameLl,
    //     shortName: data.stateShortName,
    //     status: data.active,
    //     remarks: data.remark,
    //     centralPGRMSState: data.centralPGRMSState,
    //     ut: data.ut,
    //     availableFpsMobile: data.availableFpsMobile,
    //     centralPgrmsState: data.centralPgrmsState,
    // }));
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
      setIsOpen('');
    } catch (error: any) {
      console.log('something went wrong', error);
    }
  }

  function afterOpenModal() {
    openModal();
  }

  function closeModal() {
    setIsOpen('');
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
      <div className="overflow-x-auto max-h-[21rem] mt-2">
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
      </div>

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
        isOpen={modalIsOpen === 'State'}
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
                  label="Department Name"
                  required={true}
                  name="deptName"
                  type="text"
                  placeholder="Please enter Department name"
                />
                <Controller
                  label="Designation/Role"
                  required={true}
                  name="designation"
                  type="text"
                  placeholder="Please enter Designation/Role"
                />
                <Controller
                  label="Name"
                  required={true}
                  name="name"
                  type="text"
                  placeholder="Please enter User name"
                />
                <Controller
                  label="Email"
                  required={true}
                  name="email"
                  type="text"
                  placeholder="Please enter User email"
                />
                <Controller
                  label="Mobile"
                  required={true}
                  name="mobile"
                  type="text"
                  placeholder="Please enter User mobile"
                />
                <Controller
                  label="Date"
                  required={true}
                  name="date"
                  type="date-of-birth"
                  placeholder="Please enter date"
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
