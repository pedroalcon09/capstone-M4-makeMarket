import { IBuyerUpdate } from "../../interfaces";
import { Request, Response, NextFunction } from "express";

import * as yup from "yup";

//Importar a type de Schemas
import { SchemaOf } from "yup";

//Esse regex é pra força da senha, tem estar typado assim, se n não funciona
const pwdRegex: RegExp = /(?=.*[!@#$&*])(?=.*[0-9])(?=.{6,})/g;

//Criar o schema com ShcemaOf e a Interface do schema
export const buyerUpdateSchema: SchemaOf<IBuyerUpdate> = yup.object().shape({
  name: yup.string(),
  email: yup.string().email("Wrong email format"),
  password: yup
    .string()
    .matches(
      pwdRegex,
      "Password must be 6 char long, with number and special char(!,@,#,$,&,*)"
    ),
});
