import express, { Request, Response } from "express"
import { User } from "../models/User"

const users: User[] = [
    { id: 1, name: 'Fernando' },
    { id: 2, name: 'Roque' },
]


export const getUsers = (req:Request,res:Response):void =>{
    res.json(users)
}