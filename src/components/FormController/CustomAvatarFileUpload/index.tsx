import { FC, useState } from 'react';
import './CustomAvatarFileUpload.css';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Images } from '../../../assets';
import ArrowIcon from '../../LogoComponents/ArrowIcon';
import { useFormContext } from 'react-hook-form';

const CustomAvatarFileUpload: FC<any> = ({
  field,
  disabled = false,
  name,
  ...props
}) => {

  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      if (acceptedFiles.length > 0) {
        const fileUrl = URL.createObjectURL(acceptedFiles[0]);// create a preview url
        setPreviewUrl(fileUrl);//update the preview URL state
      }
      field.onChange(acceptedFiles);
    },
    [field]
  );

  const {
    formState: { errors, touchedFields, isSubmitted },
  } = useFormContext();
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    disabled,
    accept: {
      'image/jpeg': [],
      'image/png': [],
    },
    maxSize: 5242880, // 5MB
  });
  const errorMessage =
    (touchedFields[field.name] || isSubmitted) && errors[field.name]?.message;
  console.log(name, { touchedFields, errors, isSubmitted, name });

  return (
    <>
      <div
        className={`avatar-upload-container ${isDragActive ? 'active' : ''} ${errorMessage ? 'error' : ''} ${disabled ? 'disabled' : ''}`}
      >
        <input {...getInputProps()} name={name} {...props} />
        <div className="avatar-image-parent-container">
          <div className="avatar-image-container">
            <img src={previewUrl || Images.IndiaEmblem} alt="user" />
          </div>
          <div className="upload-container" role="presentation">
            <div className="upload-icon-container">
              <ArrowIcon />
            </div>
            <div className="upload-text-helper-container">
              <p>
                Upload Photo{' '}
                <span className="" {...getRootProps()}>
                  <input {...getInputProps()} />
                  Choose file
                </span>
              </p>
              <p>PNG, JPEG. Max file size - 5MB</p>
            </div>
          </div>
        </div>
      </div>
      {errorMessage && (
        <span
          id={`${field.name}-error`}
          className="error-message controller-error"
        >
          {errorMessage}
        </span>
      )}
    </>
  );
};

export default CustomAvatarFileUpload;
