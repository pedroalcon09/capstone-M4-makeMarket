import { ISellerLogin } from "../../interfaces";
import { Request, Response, NextFunction } from "express";
import * as yup from "yup";
import { SchemaOf } from "yup";

export const sellerLoginSchema: SchemaOf<ISellerLogin> = yup.object().shape({
  email: yup.string().email("Wrong email format").required("Email needed"),
  password: yup.string().required("Password needed"),
});
