import * as Yup from "yup";

export const validation = Yup.object({
  name: Yup.string()
    .min(2, "Parent name must be at least 2 characters")
    .required(" Name cannot be empty"),
  phonenumber: Yup.string()
    .matches(/^[0-9]*$/, "Only numbers are allowed")
    .min(2, "Phone number must be at least 2 characters")
    .max(9, "Phone number must be at most 9 characters")
    .required("Phone number is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email cannot be empty"),
  adress: Yup.string()
    .required("Adress cannot be empty"),
    zipcode: Yup.number()
    .min(1, "Student age must be at least 1 character")
    .required("Zipcode cannot be empty"),
    city: Yup.string()
    .required(" City name cannot be empty"),
    coutry: Yup.string()
    .required("Coutrycannot be empty"),
    cardNumber: Yup.number()
    .min(1, "Card number must be at least 1 character")
    .max(16, "Card number must be at most 9 characters")
    .required("Card number cannot be empty"),
})