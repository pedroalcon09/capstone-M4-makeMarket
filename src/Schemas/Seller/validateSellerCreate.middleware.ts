import { ISellerCreate } from "../../interfaces";
import { Request, Response, NextFunction } from "express";
import * as yup from "yup";
import { SchemaOf } from "yup";

const pwdRegex: RegExp = /(?=.*[!@#$&*])(?=.*[0-9])(?=.{6,})/g;

export const sellerCreateSchema: SchemaOf<ISellerCreate> = yup.object().shape({
  name: yup.string().required("Name needed!"),
  email: yup.string().email("Wrong email format").required("Email needed"),
  password: yup
    .string()
    .required("Password needed")
    .matches(
      pwdRegex,
      "Password must be 6 char long, with number and special char(!,@,#,$,&,*)"
    ),
});
