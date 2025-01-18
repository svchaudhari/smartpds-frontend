import { ColumnDef } from '@tanstack/react-table';
import { DummyDataType } from '../../../pages/Inbox';
import './Tables.css';

type Props = {
  setSelectedRow: (row: DummyDataType | null) => void;
};

export const columns = ({ setSelectedRow }: Props): ColumnDef<DummyDataType>[] => [
  {
    header: 'Acknowledgement No',
    accessorKey: 'acknowledgementNo',
  },
  {
    header: 'Name of Applicant',
    accessorKey: 'name',
  },
  {
    header: 'Date',
    accessorKey: 'date',
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }: any) => {
      return (
        <button
          className="viewButton"
          onClick={() => setSelectedRow(row.original)}
        >
          View
        </button>
      );
    },
  },
];
