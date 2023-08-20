import React from 'react';
import { Checkbox } from 'antd';

const PaymentCheckBoxField = ({ logoSrc, companyName, amount }) => {
  return (
    <Checkbox>
      <div className="from__payment">
        <img src={logoSrc} alt={companyName} className="form__image" />
        <span className="from__payment-text">{companyName}</span>
        <p>${amount}</p>
      </div>
    </Checkbox>
  );
};

export default PaymentCheckBoxField;
