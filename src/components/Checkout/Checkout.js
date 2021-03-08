import React from 'react';
import './Checkout.css';
import { Formik, Form, Field } from 'formik';

function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

function validateName(value) {
  let error;
  if (!value) {
    error = 'Required';
  }
  return error;
}

function validatePhone(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[789]\d{9}$/i.test(value)) {
    error = 'Invalid Phone Number';
  }
  return error;
}

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      mobile: '',
      checkoutMessage: '',
    };
  }

  checkout = () => {
    this.setState({ checkoutMessage: 'Thank you for shopping with us!' });
  }

  handleCheck= (event) => {
    if (event.target.name === 'name') {
      this.setState((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    }
    if (event.target.name === 'email') {
      this.setState((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    }
    if (event.target.name === 'mobile') {
      this.setState((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    }
  }

  render() {
    const { checkoutMessage } = this.state;
    return (
      <>
        <Formik
          initialValues={{
            name: '',
            email: '',
            mobile: '',
          }}
        >
          {({ errors, touched }) => (
            <Form onSubmit={this.checkout}>
              <span>First name:</span>
              <br />
              <Field
                name="name"
                onSubmit={this.handleCheck}
                validate={validateName}
              />
              {errors.name && touched.name && <div>{errors.name}</div>}
              <br />
              <span>Email:</span>
              <br />
              <Field
                name="email"
                onSubmit={this.handleCheck}
                validate={validateEmail}
              />
              {errors.email && touched.email && <div>{errors.email}</div>}
              <br />
              <span>Mobile Number:</span>
              <br />
              <Field name="mobile" onSubmit={this.handleCheck} validate={validatePhone} />
              {errors.mobile && touched.mobile && <div>{errors.mobile}</div>}
              <br />
              <button type="submit">submit</button>
            </Form>
          )}
        </Formik>
        <p>{checkoutMessage}</p>
      </>
    );
  }
}
export default Checkout;
