import { FC } from 'react';
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
} from '@tanstack/react-table';
import { columns } from './columns';
import { DummyDataType } from '../../../pages/Inbox';
import Button from '../../CustomButton';
import './Tables.css';

type TableProps = {
  data: DummyDataType[];
  setSelectedRow: (row: DummyDataType | null) => void;
};

const Table: FC<TableProps> = ({ data, setSelectedRow }) => {
  const table = useReactTable({
    data,
    columns: columns({ setSelectedRow }),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

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
                <td key={cell.id}>
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
    </>
  );
};

export default Table;
