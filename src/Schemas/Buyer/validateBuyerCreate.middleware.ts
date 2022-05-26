import { IBuyerCreate } from "../../interfaces";
import { Request, Response, NextFunction } from "express";

import * as yup from "yup";

//Importar a type de Schemas
import { SchemaOf, AnyObjectSchema } from "yup";

//Esse regex é pra força da senha, tem estar typado assim, se n não funciona
const pwdRegex: RegExp = /(?=.*[!@#$&*])(?=.*[0-9])(?=.{6,})/g;

//Criar o schema com ShcemaOf e a Interface do schema
export const buyerCreateSchema: SchemaOf<IBuyerCreate> = yup.object().shape({
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
