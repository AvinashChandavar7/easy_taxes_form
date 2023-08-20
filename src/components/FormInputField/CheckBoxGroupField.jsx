import React from 'react';
import { Checkbox, Form } from 'antd';

const CheckBoxGroupField = ({ label, name, options, onChange, className }) => {
  return (
    // <div>
    //   <label>{label}</label>
    //   <Checkbox.Group
    //     name={name}
    //     options={options}
    //     onChange={onChange}
    //     className={className}
    //   />
    // </div>
    <Form.Item name={name} label={label} layout="vertical">
      <Checkbox.Group
        name={name}
        options={options}
        onChange={onChange}
        className={className}
      />
    </Form.Item>
  );
};

export default CheckBoxGroupField;
