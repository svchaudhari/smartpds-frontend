import React from 'react';
import './Details.css';
import { DummyDataType } from '../../../pages/Inbox';

interface DetailsProps {
  data: DummyDataType;
  goBack: () => void;
}

const Details: React.FC<DetailsProps> = ({ data, goBack }) => {
  return (
    <div>
      <button
        onClick={goBack}
        className="mb-6 px-4 py-2 bg-blue-100 text-white rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Back to Table
      </button>

      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Details of {data.name}
        </h2>
        <ul className="space-y-3">
          <li className="flex justify-between">
            <span className="font-medium text-gray-600">
              Acknowledgement No:
            </span>
            <span className="text-gray-800">{data.acknowledgementNo}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium text-gray-600">Name:</span>
            <span className="text-gray-800">{data.name}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium text-gray-600">Date:</span>
            <span className="text-gray-800">{data.date}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Details;
