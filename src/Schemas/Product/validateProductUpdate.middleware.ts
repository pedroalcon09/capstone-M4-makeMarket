import { IProductsUpdate } from "../../interfaces";
import { Request, Response, NextFunction } from "express";
import * as yup from "yup";
import { SchemaOf } from "yup";

const priceRegex: RegExp = /^\d+(\.\d{1,2})/;

export const productUpdateSchema: SchemaOf<IProductsUpdate> = yup
  .object()
  .shape({
    name: yup.string(),
    price: yup.number(),
    description: yup.string(),
    stock: yup.number().positive(),
    url_img: yup.string().url(),
    category_id: yup.string(),
  });
