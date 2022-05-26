import { Request, Response, NextFunction } from "express";
import { ICategoryCreate } from "../../interfaces";
import * as yup from "yup";
import { SchemaOf } from "yup";

export const createCategorySchema: SchemaOf<ICategoryCreate> = yup
  .object()
  .shape({
    name: yup.string().required().min(5),
  });
