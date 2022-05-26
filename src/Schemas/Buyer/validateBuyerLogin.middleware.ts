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
