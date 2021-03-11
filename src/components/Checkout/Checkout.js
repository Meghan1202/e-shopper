import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import axios from 'axios';
import Button from '../Button/Button';
import checkoutSchema from '../../utils/validators/checkout-schema';
import styles from './Checkout.module.css';

const postCartData = async (cartData, updateAllOrders, pastOrdersData, resetCart, resetProductCache) => {
  const pastOrders = pastOrdersData;
  const response = await axios.post('/orders', cartData);
  pastOrders.push(response.data.data);
  updateAllOrders(pastOrders);
  resetCart();
  resetProductCache();
};

const Checkout = ({
  checkoutItems, updateAllOrders, allOrders, resetCart, resetProductCache,
}) => {
  const [checkoutForm, setCheckoutForm] = useState({
    formData: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
    },
    submitted: false,
  });

  const formik = useFormik({
    initialValues: checkoutForm.formData,
    validationSchema: checkoutSchema,
    onSubmit: (formData) => setCheckoutForm({ formData, submitted: true }),
  });

  return (
    <div className={styles.container}>
      <h1>Checkout</h1>
      {!checkoutForm.submitted ? (
        <>
          <p>We&apos;ll require your contact information to send the items in your cart</p>
          <form className={styles.checkoutForm} onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">
              First Name:
              <input
                name="firstName"
                type="text"
                placeholder="John"
                onChange={formik.handleChange}
              />
            </label>
            {formik.errors.firstName && (
            <p>{formik.errors.firstName}</p>
            )}
            <label htmlFor="lastName">
              Your name:
              <input
                name="lastName"
                type="text"
                placeholder="Doe"
                onChange={formik.handleChange}
              />
            </label>
            {formik.errors.lastName && (
              <p>{formik.errors.lastName}</p>
            )}
            <label htmlFor="email">
              Your email:
              <input
                name="email"
                type="text"
                placeholder="john_doe@example.com"
                onChange={formik.handleChange}
              />
            </label>
            {formik.errors.email && (
              <p>{formik.errors.email}</p>
            )}
            <label htmlFor="phoneNumber">
              Your email:
              <input
                name="phoneNumber"
                type="text"
                placeholder="987654321"
                onChange={formik.handleChange}
              />
            </label>
            {formik.errors.phoneNumber && (
              <p>{formik.errors.phoneNumber}</p>
            )}
            <Button
              primary
              type="submit"
              className={styles.placeOrder}
              onClick={() => {
                postCartData(checkoutItems(), updateAllOrders, allOrders,
                  resetCart, resetProductCache);
              }}
            >
              Place order
            </Button>
          </form>
        </>
      )
        : (
          <>
            <p>
              {`Your items will be sent to you soon, ${checkoutForm.formData.firstName}.`}
            </p>
            <p>
              {`You receive updates on your phone - ${checkoutForm.formData.phoneNumber}`}
            </p>
          </>
        )}
    </div>
  );
};

Checkout.propTypes = {
  checkoutItems: PropTypes.func.isRequired,
};
export default Checkout;
