import { Request, Response, NextFunction } from "express";
import { ICategoryCreate } from "../interfaces";
import * as yup from "yup"
import { SchemaOf } from "yup";

export const createCategorySchema: SchemaOf<ICategoryCreate> = yup.object().shape({
    name: yup.string().required().min(3)
})

export const validateCategory = (schema: SchemaOf<ICategoryCreate>) =>
    async (req: Request, res: Response, next: NextFunction) => {
    try{
        const data = req.body

        try{
            const validatedData = await schema.validate(
                data,{
                    abortEarly: false,
                    stripUnknown: true
                }
            )
            req.newCategory = validatedData

            next()
        }catch(err: any) {
            return res.status(400).json({
                error: err.errors?.join(', ')
            })
        }
    }catch(err){
        next(err)
    }
}