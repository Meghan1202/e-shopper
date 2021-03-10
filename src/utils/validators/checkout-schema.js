import * as yup from 'yup';

const checkoutSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .min(1, 'first name should contain at least one character')
    .max(20, 'first name can only have a maximum of 20 characters')
    .required(),
  lastName: yup
    .string()
    .trim()
    .min(1, 'last name should contain at least one character')
    .max(20, 'last name can only have a maximum of 20 characters')
    .required(),
  email: yup
    .string()
    .trim()
    .email()
    .required(),
  phoneNumber: yup
    .string()
    .trim()
    .matches(/^\d{10}$/, { message: 'phone number should be a 10 digit number' })
    .required(),
});

export default checkoutSchema;
