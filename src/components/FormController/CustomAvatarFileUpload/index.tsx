import { FC } from 'react';
import './CustomAvatarFileUpload.css';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Images } from '../../../assets';
import ArrowIcon from '../../LogoComponents/UploadFileIcon';

const CustomAvatarFileUpload: FC<any> = ({ field, disabled }) => {
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
      className={`avatar-upload-container ${isDragActive ? 'active' : ''} ${disabled ? 'disabled' : ''}`}
    >
      <input {...getInputProps()} />
      <div className="avatar-image-parent-container">
        <div className="avatar-image-container">
          <img src={Images.IndiaEmblem} alt="user" />
        </div>
        <div className="upload-container" role="presentation">
          <div className="upload-icon-container">
            <ArrowIcon />
          </div>
          <div className="upload-text-helper-container">
            <p>
              Upload Photo{' '}
              <span className="" {...getRootProps()}>
                Choose file
              </span>
            </p>
            <p>PNG, JPEG. Max file size - 5MB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomAvatarFileUpload;
