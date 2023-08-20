import React from 'react';
import { Upload } from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';

const FileUploadInputField = ({
  label,
  name,
  fileList,
  onChange,
  multiple,
}) => {
  return (
    <Upload.Dragger
      name={name}
      fileList={fileList}
      multiple={multiple}
      onChange={onChange}
    >
      <p className="ant-upload-drag-icon">
        <CloudUploadOutlined style={{ color: 'gray' }} />
      </p>
      <p className="ant-upload-text">Browser Files</p>
      <p className="ant-upload-hint">Drag and drop files here</p>
    </Upload.Dragger>
  );
};

export default FileUploadInputField;
