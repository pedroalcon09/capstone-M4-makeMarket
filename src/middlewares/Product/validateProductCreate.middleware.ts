import { IProductsCreate } from "../../interfaces";
import { Request, Response, NextFunction } from "express";
import * as yup from "yup";
import { SchemaOf } from "yup";

const priceRegex: RegExp = /^\d+(\.\d{1,2})/;

export const productCreateSchema: SchemaOf<IProductsCreate> = yup
  .object()
  .shape({
    name: yup.string().required("Name required"),
    price: yup.number().required("Price required"),
    description: yup.string().required("Description required"),
    stock: yup.number().positive(),
    url_img: yup.string().url(),
    category_id: yup.string(),
  });

export const validateProductCreate = (schema: SchemaOf<IProductsCreate>) => {
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;

      try {
        const validateData = await schema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
        });

        req.newProduct = validateData;

        next();
      } catch (err: any) {
        const error = err.errors?.join(", ");

        return res.status(400).json({ error });
      }
    } catch (err) {
      next(err);
    }
  };
};
