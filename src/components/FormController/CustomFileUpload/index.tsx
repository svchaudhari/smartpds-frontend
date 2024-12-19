import { FC } from 'react';
import './CustomFileUpload.css';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const CustomFileUpload: FC<any> = ({ field, disabled }) => {
  const onDrop = useCallback(
    (acceptedFiles: any) => {
      field.onChange(acceptedFiles);
    },
    [field]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    disabled,
  });

  return (
    <div
      {...getRootProps()}
      className={`file-upload-container ${isDragActive ? 'active' : ''} ${disabled ? 'disabled' : ''}`}
    >
      <input {...getInputProps()} />
      <p>
        {isDragActive
          ? 'Drop the files here...'
          : 'Drag & drop files here, or click to select files'}
      </p>
    </div>
  );
};

export default CustomFileUpload;
