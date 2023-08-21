/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Modal,
  Form,
  Input,
  Button,
  Radio,
  Upload,
  Divider,
  Checkbox,
} from 'antd';
import './FormComponent.css';
import { CloudUploadOutlined } from '@ant-design/icons';

import logo from '../../assets/eazytaxes.com.svg';
import FileUploadInputField from '../FormInputField/FileUploadInputField';
import CheckBoxGroupField from '../FormInputField/CheckBoxGroupField';
import PaymentCheckBoxField from '../FormInputField/PaymentCheckBoxField';
import CouponInputField from '../FormInputField/CouponInputField';

const FormComponent = ({ addFormDataToList, visible, onCancel }) => {
  const [form] = Form.useForm();

  const [currentStep, setCurrentStep] = useState(0);
  const [nextModalVisible, setNextModalVisible] = useState(false);

  const handleNextStep = () => {
    if (currentStep === 0) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 1) {
      setNextModalVisible(true);
    }
  };

  const handleSubmit = (values) => {
    const { email, returnsLastYear } = values;

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValidEmail = emailPattern.test(email);

    if (isValidEmail) {
      addFormDataToList(values);

      form.resetFields();
    }
  };

  return (
    <div className="form-container">
      <Modal
        visible={visible}
        title="Create Form Details"
        onCancel={onCancel}
        footer={null}
        width={600}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="from-content"
        >
          {/* email */}
          <Form.Item
            label="Email"
            name="email"
            help="example@example.com"
            validateStatus="success"
            rules={[
              { type: 'email', message: 'Please enter a valid email address' },
              { required: true, message: 'Please input your email!' },
            ]}
            className="form__email"
          >
            <Input id="email" />
          </Form.Item>

          <Form.Item
            label="Did you file the returns last year?"
            name="returnsLastYear"
            rules={[{ message: 'Please select an option' }]}
          >
            <Radio.Group>
              <Radio value="yes">Yes</Radio>
              <br />
              <Radio value="no">No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Upload documents for the same field"
            name="transactionDocs"
            valuePropName="fileList"
            getValueFromEvent={(e) => e.fileList}
            rules={[
              {
                //  required: true,
                message: 'Please upload documents',
              },
            ]}
            className="from-upload"
          >
            <FileUploadInputField name="files" multiple={true} />
          </Form.Item>

          <Form.Item
            label="Was the S - Corp incorporated in 2022?"
            name="incorporatedIn2022"
            rules={[{ message: 'Please select an option' }]}
            className="from__radio"
          >
            <Radio.Group>
              <Radio value="yes">Yes</Radio>
              <br />
              <Radio value="no">No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Please Upload the Incorporation Documents"
            name="incorporationDocs"
            valuePropName="fileList"
            getValueFromEvent={(e) => e.fileList}
            rules={[
              {
                // required: true,
                message: 'Please upload incorporation documents',
              },
            ]}
            className="from-upload"
          >
            <FileUploadInputField name="files" multiple={true} />
          </Form.Item>

          <Form.Item
            label="Was there any change in Ownership Structure in 2022?"
            name="ownershipChange2022"
            rules={[{ message: 'Please select an option' }]}
            className="from__radio"
          >
            <Radio.Group>
              <Radio value="yes">Yes</Radio>
              <br />
              <Radio value="no">No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Upload latest Shareholding pattern"
            name="shareholdingPattern"
            valuePropName="fileList"
            getValueFromEvent={(e) => e.fileList}
            rules={[
              {
                //  required: true,
                message: 'Please upload shareholding pattern',
              },
            ]}
            className="from-upload"
            style={{ color: 'gray' }}
          >
            <FileUploadInputField name="files" multiple={true} />
          </Form.Item>

          <Divider plain />

          <Form.Item className="from__button">
            <Button htmlType="submit" className="from__button-save">
              Save
            </Button>
            {/* {!nextModalVisible && ( */}
            <Button
              htmlType="button"
              onClick={handleNextStep}
              className="from__button-next"
            >
              Next
            </Button>

            {nextModalVisible && (
              <>
                {/* Checkbox options */}

                <CheckBoxGroupField
                  label="Was there any following transaction in 2022?"
                  name="transactionOptions"
                  className="from__checkboxs"
                  options={[
                    { label: 'Capital Infusion', value: 'capitalInfusion' },
                    { label: 'Capital Withdrawal', value: 'capitalWithdrawal' },
                    {
                      label: 'Related Party Transaction',
                      value: 'relatedPartyTransaction',
                    },
                  ]}
                  // onChange={/* handleCheckboxChange */}
                />

                {/* transaction Docs field */}

                <Form.Item
                  label="Upload documents for the same field"
                  name="transactionDocs"
                  valuePropName="fileList"
                  getValueFromEvent={(e) => e.fileList}
                  rules={[
                    {
                      // required: true,
                      message: 'Please upload documents',
                    },
                  ]}
                  className="from-upload"
                >
                  <FileUploadInputField name="files" multiple={true} />
                </Form.Item>

                {/* Documents */}

                <CheckBoxGroupField
                  label="Please upload the following documents"
                  name="documentCheckboxes"
                  className="from__checkboxs"
                  options={[
                    { label: 'Bank Statements', value: 'bankStatements' },
                    {
                      label: 'Credit Card Statements',
                      value: 'creditCardStatements',
                    },
                    { label: 'Form 10991', value: 'form10991' },
                    { label: 'Form 940 / 941', value: 'form940941' },
                    { label: 'EIN Certificate', value: 'einCertificate' },
                    {
                      label: 'IRS Acceptance Letter of S-Corp',
                      value: 'irsAcceptanceLetter',
                    },
                    { label: 'Financials (if prepared)', value: 'financials' },
                  ]}
                  // onChange={/* handleCheckboxChange */}
                />

                {/* Upload field for document */}
                <Form.Item
                  label="Upload documents for the same field"
                  name="documentUpload"
                  valuePropName="fileList"
                  getValueFromEvent={(e) => e.fileList}
                  rules={[
                    {
                      // required: true,
                      message: 'Please upload documents',
                    },
                  ]}
                  className="from-upload"
                >
                  <FileUploadInputField name="files" multiple={true} />
                </Form.Item>

                {/* Payment */}

                {nextModalVisible && (
                  <PaymentCheckBoxField
                    logoSrc={logo}
                    companyName="EazyTaxes"
                    amount="349"
                  />
                )}

                {/* Coupon */}

                {nextModalVisible && (
                  <CouponInputField
                    // onApplyCoupon={/* handleCouponApply */}
                    totalAmount="$0.00"
                  />
                )}

                <Divider plain />

                {/* Back, Save, and Submit buttons */}
                <Form.Item className="from__button">
                  <Button className="from__button-back">Back</Button>
                  <Button htmlType="submit" className="from__button-save">
                    Save
                  </Button>
                  <Button htmlType="submit" className="from__button-submit">
                    Submit
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default FormComponent;

// /* eslint-disable no-unused-vars */
// import React, { useState } from 'react';
// import {
//   Modal,
//   Form,
//   Input,
//   Button,
//   Radio,
//   Upload,
//   Divider,
//   Checkbox,
// } from 'antd';
// import './FormComponent.css';
// import { CloudUploadOutlined } from '@ant-design/icons';

// import logo from '../../assets/eazytaxes.com.svg';

// const FormComponent = ({ addFormDataToList, visible, onCancel }) => {
//   const [form] = Form.useForm();

//   const [currentStep, setCurrentStep] = useState(0);
//   const [nextModalVisible, setNextModalVisible] = useState(false);

//   const handleNextStep = () => {
//     if (currentStep === 0) {
//       setCurrentStep(currentStep + 1);
//     } else if (currentStep === 1) {
//       setNextModalVisible(true);
//     }
//   };

//   const handleSubmit = (values) => {
//     const { email, returnsLastYear } = values;

//     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     const isValidEmail = emailPattern.test(email);

//     if (isValidEmail) {
//       addFormDataToList(values);
//       form.resetFields();
//     }
//   };

//   return (
//     <div className="form-container">
//       <Modal
//         visible={visible}
//         title="Create Form Details"
//         onCancel={onCancel}
//         footer={null}
//         width={600}
//       >
//         <Form
//           form={form}
//           layout="vertical"
//           onFinish={handleSubmit}
//           className="from-content"
//         >
//           {/* email */}
//           <Form.Item
//             label="Email"
//             name="email"
//             help="example@example.com"
//             validateStatus="success"
//             rules={[
//               { type: 'email', message: 'Please enter a valid email address' },
//               { required: true, message: 'Please input your email!' },
//             ]}
//             className="form__email"
//           >
//             <Input id="email" />
//           </Form.Item>

//           <Form.Item
//             label="Did you file the returns last year?"
//             name="returnsLastYear"
//             rules={[{ message: 'Please select an option' }]}
//           >
//             <Radio.Group>
//               <Radio value="yes">Yes</Radio>
//               <br />
//               <Radio value="no">No</Radio>
//             </Radio.Group>
//           </Form.Item>

//           <Form.Item
//             label="File Upload"
//             name="fileUpload"
//             valuePropName="fileList"
//             getValueFromEvent={(e) => e.fileList}
//             rules={[{ required: true, message: 'Please upload a file' }]}
//             className="from-upload"
//           >
//             <Upload.Dragger name="files" multiple={false}>
//               <p className="ant-upload-drag-icon">
//                 <CloudUploadOutlined style={{ color: 'gray' }} />
//               </p>
//               <p className="ant-upload-text">Browser Files</p>
//               <p className="ant-upload-hint">Drag and drop files here</p>
//             </Upload.Dragger>
//           </Form.Item>

//           <Form.Item
//             label="Was the S - Corp incorporated in 2022?"
//             name="incorporatedIn2022"
//             rules={[{ message: 'Please select an option' }]}
//             className="from__radio"
//           >
//             <Radio.Group>
//               <Radio value="yes">Yes</Radio>
//               <br />
//               <Radio value="no">No</Radio>
//             </Radio.Group>
//           </Form.Item>

//           <Form.Item
//             label="Please Upload the Incorporation Documents"
//             name="incorporationDocs"
//             valuePropName="fileList"
//             getValueFromEvent={(e) => e.fileList}
//             rules={[
//               {
//                 required: true,
//                 message: 'Please upload incorporation documents',
//               },
//             ]}
//             className="from-upload"
//           >
//             <Upload.Dragger name="files" multiple={false}>
//               <p className="ant-upload-drag-icon">
//                 <CloudUploadOutlined style={{ color: 'gray' }} />
//               </p>
//               <p className="ant-upload-text">Browser Files</p>
//               <p className="ant-upload-hint">Drag and drop files here</p>
//             </Upload.Dragger>
//           </Form.Item>

//           <Form.Item
//             label="Was there any change in Ownership Structure in 2022?"
//             name="ownershipChange2022"
//             rules={[{ message: 'Please select an option' }]}
//             className="from__radio"
//           >
//             <Radio.Group>
//               <Radio value="yes">Yes</Radio>
//               <br />
//               <Radio value="no">No</Radio>
//             </Radio.Group>
//           </Form.Item>

//           <Form.Item
//             label="Upload latest Shareholding pattern"
//             name="shareholdingPattern"
//             valuePropName="fileList"
//             getValueFromEvent={(e) => e.fileList}
//             rules={[
//               { required: true, message: 'Please upload shareholding pattern' },
//             ]}
//             className="from-upload"
//             style={{ color: 'gray' }}
//           >
//             <Upload.Dragger
//               name="files"
//               multiple={false}
//               className="from-uploads"
//             >
//               <p className="ant-upload-drag-icon">
//                 <CloudUploadOutlined style={{ color: 'gray' }} />
//               </p>
//               <p className="ant-upload-text">Browser Files</p>
//               <p className="ant-upload-hint">Drag and drop files here</p>
//             </Upload.Dragger>
//           </Form.Item>

//           <Divider plain />

//           <Form.Item className="from__button">
//             <Button htmlType="submit" className="from__button-save">
//               Save
//             </Button>
//             {/* {!nextModalVisible && ( */}
//             <Button
//               htmlType="button"
//               onClick={handleNextStep}
//               className="from__button-next"
//             >
//               Next
//             </Button>

//             {nextModalVisible && (
//               <>
//                 {/* Checkbox options */}
//                 <Form.Item
//                   name="transactionOptions"
//                   label="Was there any following transaction in 2022?"
//                   layout="vertical"
//                 >
//                   <Checkbox.Group className="from__checkboxs">
//                     <Checkbox value="capitalInfusion">
//                       Capital Infusion
//                     </Checkbox>

//                     <Checkbox value="capitalWithdrawal">
//                       Capital Withdrawal
//                     </Checkbox>

//                     <Checkbox value="relatedPartyTransaction">
//                       Related Party Transaction
//                     </Checkbox>
//                   </Checkbox.Group>
//                 </Form.Item>

//                 {/* Upload field */}
//                 <Form.Item
//                   label="Upload documents for the same field"
//                   name="transactionDocs"
//                   valuePropName="fileList"
//                   getValueFromEvent={(e) => e.fileList}
//                   rules={[
//                     { required: true, message: 'Please upload documents' },
//                   ]}
//                   className="from-upload"
//                 >
//                   <Upload.Dragger name="files" multiple={true}>
//                     <p className="ant-upload-drag-icon">
//                       <CloudUploadOutlined style={{ color: 'gray' }} />
//                     </p>
//                     <p className="ant-upload-text">Browser Files</p>
//                     <p className="ant-upload-hint">Drag and drop files here</p>
//                   </Upload.Dragger>
//                 </Form.Item>

//                 {/* ... Add more content for the second modal */}
//                 {/* Documents */}
//                 <Form.Item
//                   name="documentCheckboxes"
//                   label="Please upload the following documents"
//                   layout="vertical"
//                 >
//                   <Checkbox.Group className="from__checkboxs">
//                     <Checkbox value="bankStatements">Bank Statements</Checkbox>
//                     <Checkbox value="creditCardStatements">
//                       Credit Card Statements
//                     </Checkbox>
//                     <Checkbox value="form10991">Form 10991</Checkbox>
//                     <Checkbox value="form940941">Form 940 / 941</Checkbox>
//                     <Checkbox value="einCertificate">EIN Certificate</Checkbox>
//                     <Checkbox value="irsAcceptanceLetter">
//                       IRS Acceptance Letter of S-Corp
//                     </Checkbox>
//                     <Checkbox value="financials">
//                       Financials (if prepared)
//                     </Checkbox>
//                   </Checkbox.Group>
//                 </Form.Item>

//                 {/* Upload field for document */}
//                 <Form.Item
//                   label="Upload documents for the same field"
//                   name="documentUpload"
//                   valuePropName="fileList"
//                   getValueFromEvent={(e) => e.fileList}
//                   rules={[
//                     { required: true, message: 'Please upload documents' },
//                   ]}
//                   className="from-upload"
//                 >
//                   <Upload.Dragger name="files" multiple={true}>
//                     <p className="ant-upload-drag-icon">
//                       <CloudUploadOutlined style={{ color: 'gray' }} />
//                     </p>
//                     <p className="ant-upload-text">Browser Files</p>
//                     <p className="ant-upload-hint">Drag and drop files here</p>
//                   </Upload.Dragger>
//                 </Form.Item>

//                 {/* Payment */}
//                 <Form.Item
//                   name="payment"
//                   label="Please complete the payment"
//                   layout="vertical"
//                   width="100%"
//                 >
//                   <Checkbox.Group>
//                     <Checkbox value="paymentCheckbox">
//                       <div className="from__payment">
//                         <img
//                           src={logo}
//                           alt="Company Logo"
//                           className="form__image"
//                         />
//                         <span className="from__payment-text">EazyTaxes</span>
//                         <p>$349</p>
//                       </div>
//                     </Checkbox>
//                   </Checkbox.Group>
//                 </Form.Item>

//                 {/* Coupon */}
//                 <Form.Item name="coupon" label="Enter Coupon">
//                   <div className="form__coupon">
//                     <Input
//                       placeholder="Enter Coupon Code"
//                       className="from__coupon-input"
//                     />
//                     <Button className="from__button-apply">Apply</Button>
//                   </div>
//                   <p className="from__coupon-amount">Total Amount $0.00</p>
//                 </Form.Item>

//                 <Divider plain />

//                 {/* Back, Save, and Submit buttons */}
//                 <Form.Item className="from__button">
//                   <Button className="from__button-back">Back</Button>
//                   <Button htmlType="submit" className="from__button-save">
//                     Save
//                   </Button>
//                   <Button htmlType="submit" className="from__button-submit">
//                     Submit
//                   </Button>
//                 </Form.Item>
//               </>
//             )}
//           </Form.Item>
//         </Form>
//       </Modal>
//     </div>
//   );
// };

// export default FormComponent;
