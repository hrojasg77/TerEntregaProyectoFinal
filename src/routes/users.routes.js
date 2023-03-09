import { Router } from "express";
import {loginUsers, registerUsers, prueba, UsersInfo} from "../controllers/users.controller.js"

const router = Router()

router.get('/prueba', prueba)

router.post('/login', loginUsers)

router.post('/api/users/register', registerUsers)

router.get('/api/userinfo', UsersInfo)

export default router