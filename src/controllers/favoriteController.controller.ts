import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appError";

import addFavoriteService from "../service/addFavorite.service"
import removeFavoriteService from "../service/removeFavorite.service"
import listFavoriteService from "../service/listFavorite.service"

export default class favoriteController{
    static async add(req:Request, res:Response){
        try{
            const { buyerID, productId } = req.params

            const newFavorite = await addFavoriteService({buyerID, productId})

            return res.status(201).json({message: "Product added to favourites successfully"})
        }catch(err){
            if(err instanceof AppError){
                handleError(err, res)
            }
        }
    }
    static async remove(req:Request, res:Response){
        try{
            const { buyerID, productId } = req.params

            const favoriteRemoved = await removeFavoriteService({buyerID, productId})

            return res.status(200).json({message: "Product removed from favourites successfully"})
        }catch(err){
            if(err instanceof AppError){
                handleError(err, res)
            }
        }
    }
    static async list(req:Request, res:Response){
        try{
            const { buyerID } = req.params

            const listFavorite = await listFavoriteService({buyerID})

            return res.status(200).json({favorites: listFavorite})
        }catch(err){
            if(err instanceof AppError){
                handleError(err, res)
            }
        }
    }
}
