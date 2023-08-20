/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Card, List } from 'antd';
import FormComponent from '../../components/FormComponent/FormComponent';
import './FormList.css';
import FilePreviewModal from '../FilePreviewModal/FilePreviewModal';
import UploadedFilesList from '../UploadedFilesList/UploadedFilesList';
import FromInfo from '../FromInfo/FromInfo';

const FormList = () => {
  const [visible, setVisible] = useState(false);
  const [fromLists, setFromLists] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewFile, setPreviewFile] = useState(null);

  const addFormDataToList = (formData) => {
    setFromLists([...fromLists, formData]);
    console.log(formData);
    setVisible(false);
  };

  const onCancel = () => {
    setVisible(false);
  };

  const handlePreview = (file) => {
    setPreviewFile(file);
    setPreviewVisible(true);
  };

  const handlePreviewCancel = () => {
    setPreviewVisible(false);
    setPreviewFile(null);
  };

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Create Form
      </Button>

      <FormComponent
        addFormDataToList={addFormDataToList}
        visible={visible}
        onCancel={onCancel}
      />

      {/* Display form data in Cards */}
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={fromLists}
        renderItem={(item) => (
          <List.Item>
            <Card
              title={`Form Submission - ${item.email}`}
              style={{ width: '100%' }}
            >
              <FromInfo title="Email " info={item.email} />
              <FromInfo
                title="Returns Last Year "
                info={item.returnsLastYear}
              />

              {/* Display uploaded files */}

              {item.fileUpload && item.fileUpload.length > 0 && (
                <UploadedFilesList
                  title={'File Upload:'}
                  files={item.fileUpload}
                  handlePreview={handlePreview}
                />
              )}

              <FromInfo
                title="Incorporated in 2022"
                info={item.incorporatedIn2022}
              />

              {/* Display uploaded files */}
              {item.incorporationDocs && item.incorporationDocs.length > 0 && (
                <UploadedFilesList
                  title={'Incorporation Documents:'}
                  files={item.incorporationDocs}
                  handlePreview={handlePreview}
                />
              )}

              <FromInfo
                title="Ownership Change 2022"
                info={item.ownershipChange2022}
              />

              {item.shareholdingPattern &&
                item.shareholdingPattern.length > 0 && (
                  <UploadedFilesList
                    title={'Shareholding Pattern:'}
                    files={item.shareholdingPattern}
                    handlePreview={handlePreview}
                  />
                )}

              <FromInfo
                title="Transaction Options"
                info={item.ownershipChange2022}
              />

              {/* Display incorporationDocs */}

              {item.incorporationDocs && item.incorporationDocs.length > 0 && (
                <UploadedFilesList
                  title={'Incorporation Documents:'}
                  files={item.incorporationDocs}
                  handlePreview={handlePreview}
                />
              )}

              {/* Display documentCheckboxes */}
              {item.documentCheckboxes &&
                item.documentCheckboxes.length > 0 && (
                  <FromInfo
                    title="Document Checkboxes"
                    info={item.documentCheckboxes.join(', ')}
                  />
                )}

              {/* Display transactionOptions */}
              {item.transactionOptions &&
                item.transactionOptions.length > 0 && (
                  <FromInfo
                    title="Transaction Options"
                    info={item.transactionOptions.join(', ')}
                  />
                )}

              {/* Display documentUpload */}
              {item.documentUpload && item.documentUpload.length > 0 && (
                <UploadedFilesList
                  title={'Document Upload::'}
                  files={item.documentUpload}
                  handlePreview={handlePreview}
                />
              )}

              {/* Display payment */}
              {item.payment && item.payment.length > 0 && (
                <FromInfo title="Payment" info={item.payment.join(', ')} />
              )}

              {/* Display coupon */}
              {item.coupon && item.coupon.length > 0 && (
                <FromInfo title="Coupon" info={item.coupon.join(', ')} />
              )}
            </Card>
          </List.Item>
        )}
      />

      {/* Modal for file preview */}
      <FilePreviewModal
        previewFile={previewFile}
        onCancel={handlePreviewCancel}
      />
    </>
  );
};

export default FormList;
