import { Router } from "express";
import { getUsers } from "../controller/userController";




const userRoutes = Router()

userRoutes.get('/',getUsers)

export default userRoutes