import React from 'react';
import { Tag } from 'antd';

const UploadedFilesList = ({ title, files, handlePreview }) => {
  return (
    <span>
      <strong>{title}</strong>
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            <Tag color="blue" onClick={() => handlePreview(file)}>
              {file.name}
            </Tag>{' '}
            ({file.size} bytes)
          </li>
        ))}
      </ul>
    </span>
  );
};

export default UploadedFilesList;
