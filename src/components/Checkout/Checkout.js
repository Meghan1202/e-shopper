import React from 'react';
import './Checkout.css';
import { Formik, Form, Field } from 'formik';

// function validateEmail(value) {
//   let error;
//   if (!value) {
//     error = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
//     error = 'Invalid email address';
//   }
//   return error;
// }

function validateName(value) {
  console.log({ value });
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

// convert to functional component and use hook
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

  checkout = (event) => {
    this.handleCheck(event);
    console.log(event);
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
    const {
      checkoutMessage,
    } = this.state;
    return (
      <>
        <Formik
          initialValues={{
            name: '',
            email: '',
            mobile: '',
          }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));

              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <span>First name:</span>
              <br />
              <Field
                name="name"
                // onChange={this.handleCheck}
                validate={validateName}
                // value={name}
              />
              {errors.name && touched.name && <div>{errors.name}</div>}
              <br />
              <span>Email:</span>
              <br />
              <Field
                name="email"
                // onChange={this.handleCheck}
                type="email"
                // validate={validateEmail}
                // value={email}
              />
              {errors.email && touched.email && <div>{errors.email}</div>}
              <br />
              <span>Mobile Number:</span>
              <br />
              <Field
                name="mobile"
              // onChange={this.handleCheck}
                validate={validatePhone}
                // typ
                // value={mobile}
              />
              {errors.mobile && touched.mobile && <div>{errors.mobile}</div>}
              <br />
              <button type="button" onClick={this.checkout}>submit</button>
            </Form>
          )}
        </Formik>
        <p>{checkoutMessage}</p>
      </>
    );
  }
}
export default Checkout;
