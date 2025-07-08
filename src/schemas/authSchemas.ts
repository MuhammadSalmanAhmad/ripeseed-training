import * as yup from "yup";

export const registrationSchema = yup.object({
  username: yup.string().min(5).max(15).required(),
  email: yup.string().email().required(),
  password: yup.string().required().max(10),
  confirmpassword: yup.string().oneOf([yup.ref("password")], "Passwords must match").required(),
  dob: yup.date(),
  balance: yup.number().required()
});

export const loginSchema = yup.object({
  email: yup.string().email("enter a valid email").required(),
  password: yup.string().required("password is required")
});
