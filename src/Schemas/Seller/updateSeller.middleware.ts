import { ISellerUpdate } from "../../interfaces";
import { Request, Response, NextFunction } from "express";
import * as yup from "yup";
import { SchemaOf } from "yup";

const pwdRegex: RegExp = /(?=.*[!@#$&*])(?=.*[0-9])(?=.{6,})/g;

export const sellerUpdateSchema: SchemaOf<ISellerUpdate> = yup.object().shape({
  name: yup.string(),
  email: yup.string().email("Wrong email format"),
  password: yup
    .string()
    .matches(
      pwdRegex,
      "Password must be 6 char long, with number and special char(!,@,#,$,&,*)"
    ),
});
