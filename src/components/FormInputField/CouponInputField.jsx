import React from 'react';
import { Input, Button } from 'antd';

const CouponInputField = ({ onApplyCoupon, totalAmount }) => {
  return (
    <>
      <div className="form__coupon">
        <Input placeholder="Enter Coupon Code" className="from__coupon-input" />
        <Button className="from__button-apply" onClick={onApplyCoupon}>
          Apply
        </Button>
      </div>
      <p className="from__coupon-amount">Total Amount {totalAmount}</p>
    </>
  );
};

export default CouponInputField;
