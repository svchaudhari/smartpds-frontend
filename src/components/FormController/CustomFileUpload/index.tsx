import { FC } from 'react';
import './CustomFileUpload.css';
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import ArrowIcon from '../../LogoComponents/ArrowIcon';
import BinIcon from '../../LogoComponents/BinIcon';

interface CustomFileUploadProps {
  field: any;
  disabled?: boolean;
  name?: string;
  label?: string;
  filename?: string;
}
const CustomFileUpload: FC<CustomFileUploadProps> = ({
  field,
  // label,
  // filename,
  // name,
  disabled = false,
  // ...props
}) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      const file = acceptedFiles[0];
      setUploadedFile(file);
      field.onChange(acceptedFiles);
    },
    [field]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    disabled: uploadedFile !== null || disabled,
  });

  const handleDeleteFile = () => {
    setUploadedFile(null);
    field.onChange([]);
  };

  return (
    <div
      className={`file-upload-container ${isDragActive ? 'active' : ''} ${disabled ? 'disabled' : ''}`}
    >
      <div
        className={`upload-container ${uploadedFile ? 'file-uploaded' : ''}`}
        role="presentation"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {!uploadedFile && (
          <div className="upload-icon-container">
            <ArrowIcon />
          </div>
        )}

        <div className="upload-text-helper-container">
          {uploadedFile ? (
            <div className="uploaded-file">
              <p className="uploaded-file-name">{uploadedFile.name}</p>
              <span className="uploaded-file-delete" onClick={handleDeleteFile}>
                <BinIcon />
              </span>
            </div>
          ) : (
            <>
              <p className="upload-text">
                {isDragActive
                  ? 'Release to upload file'
                  : 'Drag and drop file here or '}
                <span className="choose-file-text">Choose file</span>
              </p>
              <p className="file-specs">
                Supported files: PNG, JPEG. Max file size: 5MB
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomFileUpload;
