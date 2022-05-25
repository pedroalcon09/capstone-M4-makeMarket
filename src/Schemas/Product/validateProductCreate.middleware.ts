import { IProductsCreateReq } from "../../interfaces";
import { Request, Response, NextFunction } from "express";
import * as yup from "yup";
import { SchemaOf } from "yup";

const priceRegex: RegExp = /^\d+(\.\d{1,2})/;

export const productCreateSchema: SchemaOf<IProductsCreateReq> = yup
  .object()
  .shape({
    name: yup.string().required("Name required"),
    price: yup.number().required("Price required"),
    description: yup.string().required("Description required"),
    stock: yup.number().required("Must have a stock amount").positive(),
    url_img: yup.string().required("Must have an image for display").url(),
    category_id: yup.string().required("Must have a category that fits"),
  });

export const validateProductCreate =
  (schema: SchemaOf<IProductsCreateReq>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;

      try {
        const validateData = await schema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
        });

        req.body = validateData;

        next();
      } catch (err: any) {
        const error = err.errors?.join(", ");

        return res.status(400).json({ error });
      }
    } catch (err) {
      next(err);
    }
  };
