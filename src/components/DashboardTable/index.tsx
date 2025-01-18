import {
  useReactTable,
  ColumnDef,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
} from '@tanstack/react-table';

import { useState } from 'react';
import './DashboardTable.css';
const dummyData = [
  {
    id: 1,
    applicationNo: 'RA87676890',
    applicationDate: 'Nov 14th 2024',
    applicationName: 'John Doe',
    type: 'New Request',
    pendency: '10 Day',
    action: 'View Application',
  },
  {
    id: 2,
    applicationNo: 'RA87676891',
    applicationDate: 'Nov 14th 2024',
    applicationName: 'Jane Smith',
    type: 'Re-Submitted',
    pendency: '10 Day',
    action: 'View Application',
  },
  {
    id: 3,
    applicationNo: 'RA87676892',
    applicationDate: 'Nov 14th 2024',
    applicationName: 'Alice Johnson',
    type: 'Transfer',
    pendency: '10 Day',
    action: 'View Application',
  },
];
const DashboardTable = () => {
  const [data] = useState(dummyData);

  const columns: ColumnDef<any>[] = [
    {
      header: 'Sr No',
      accessorKey: 'id',
    },
    {
      header: 'Application No',
      accessorKey: 'applicationNo',
    },
    {
      header: 'Application Date',
      accessorKey: 'applicationDate',
    },
    {
      header: 'Application Name',
      accessorKey: 'applicationName',
    },
    {
      header: 'Type',
      accessorKey: 'type',
    },
    {
      header: 'Pendency',
      accessorKey: 'pendency',
    },
    {
      header: 'Action Date',
      accessorKey: 'action',
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    // updateMyData,
  });

  return (
    <>
      <div className="dashboard-table overflow-x-auto max-h-[21rem] mt-2">
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
                  <td
                    key={cell.id}
                    className={(() => {
                      const value = cell.getValue();
                      if (cell.column.id === 'type') {
                        if (value === 'Transfer') {
                          return 'type transfer';
                        } else if (value === 'New Request') {
                          return 'type New-Request';
                        } else if (value === 'Re-Submitted') {
                          return 'type Re-Submitted';
                        }
                      } else if (cell.column.id === 'pendency') {
                        return 'pendency-box';
                      } else if (cell.column.id === 'action') {
                        return 'action-box';
                      } else if (cell.column.id === 'id') {
                        return 'sr-no';
                      }
                      return ''; // Default case for other columns
                    })()}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashboardTable;
