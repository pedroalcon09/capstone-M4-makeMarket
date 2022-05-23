import { Request, Response, NextFunction } from "express";
import { IBuysPay } from "../interfaces";
import * as yup from "yup"
import { SchemaOf } from "yup";

export const paymentSchema: SchemaOf<IBuysPay> = yup.object().shape({
    grade: yup.number().required(),
    feedback: yup.string().required().min(15)
})

export const validatePayment = (schema: SchemaOf<IBuysPay>) =>
    async (req: Request, res: Response, next: NextFunction) => {
    try{
        const data = req.body

        try{
            const vadatedData = await schema.validate(
                data,{
                    abortEarly: false,
                    stripUnknown: true
                }
            )
            req.newPayment = vadatedData

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