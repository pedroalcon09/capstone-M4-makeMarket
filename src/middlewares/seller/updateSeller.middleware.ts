import { ISellerCreate } from '../../interfaces';
import { Request, Response, NextFunction } from 'express';
import * as yup from 'yup';
import { SchemaOf } from 'yup';

const pwdRegex: RegExp = /(?=.*[!@#$&*])(?=.*[0-9])(?=.{6,})/g;

export const sellerCreateSchema: SchemaOf<ISellerCreate> = yup.object().shape({
  name: yup.string(),
  email: yup.string().email('Wrong email format'),
  password: yup
    .string()
    .matches(
      pwdRegex,
      'Password must be 6 char long, with number and special char(!,@,#,$,&,*)'
    ),
});

export const validateSellerUpdate = (schema: SchemaOf<ISellerCreate>) => {
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;

      try {
        const validateData = await schema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
        });
        req.updateSeller = validateData;

        next();
      } catch (err: any) {
        const error = err.errors?.join(', ');

        return res.status(400).json({ error });
      }
    } catch (err) {
      next(err);
    }
  };
};
