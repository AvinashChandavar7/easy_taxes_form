import React from 'react';
import { Modal } from 'antd';

const FilePreviewModal = ({ previewFile, onCancel }) => (
  <Modal visible={!!previewFile} onCancel={onCancel} footer={null} width={800}>
    {previewFile && (
      <iframe
        title="File Preview"
        src={URL.createObjectURL(previewFile.originFileObj)}
        width="100%"
        height="600"
      />
    )}
  </Modal>
);

export default FilePreviewModal;
