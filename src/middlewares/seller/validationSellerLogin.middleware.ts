import { ISellerLogin } from '../../interfaces';
import { Request, Response, NextFunction } from 'express';
import * as yup from 'yup';
import { SchemaOf } from 'yup';

export const sellerLoginSchema: SchemaOf<ISellerLogin> = yup.object().shape({
  email: yup.string().email('Wrong email format').required('Email needed'),
  password: yup.string().required('Password needed'),
});

export const validateSellerLogin = (schema: SchemaOf<ISellerLogin>) => {
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;

      try {
        const validateData = await schema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
        });
        req.loginSeller = validateData;

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
