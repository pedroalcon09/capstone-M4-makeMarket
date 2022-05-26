import { Request, Response, NextFunction } from "express";
import { IBuysPay } from "../../interfaces";
import * as yup from "yup";
import { SchemaOf } from "yup";

export const paymentSchema: SchemaOf<IBuysPay> = yup.object().shape({
  grade: yup.number().required("Must send a grade from 0 to 5"),
  feedback: yup.string().required("Feedback needded").min(20),
});
