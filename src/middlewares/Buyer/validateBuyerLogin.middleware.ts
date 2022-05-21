import { IBuyerLogin } from "../../interfaces";
import { Request, Response, NextFunction } from "express";

import * as yup from "yup";

//Importar a type de Schemas
import { SchemaOf } from "yup";

//Criar o schema com ShcemaOf e a Interface do schema
export const buyerLoginSchema: SchemaOf<IBuyerLogin> = yup.object().shape({
  email: yup.string().email("Wrong email format").required("Email needed"),
  password: yup.string().required("Password needed"),
});

//Criar função pra fazer a validação
export const validateBuyerLogin = (schema: SchemaOf<IBuyerLogin>) => {
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;

      try {
        const validateData = await schema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
        });
        req.loginBuyer = validateData;

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
