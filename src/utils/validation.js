import * as yup from "yup"

const signInSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Your password is too short!")
    .required("This field is required!"),
  email: yup
    .string()
    .email("Your email is invalid!")
    .required("This field is required!")
});

const signUpSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Your password is too short!")
    .required("This field is required!"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  email: yup
    .string()
    .email("Your email is invalid!")
    .required("This field is required!")
});

export { signInSchema, signUpSchema };
