import { Router } from "express";
import {registerProductCart, listProductsCart, deleteProductCart, emptyProductCart} from "../controllers/shoppingCart.controller.js";

const router = Router()

router.post('/api/shoppingcartproducts', registerProductCart)

router.get('/api/shoppingcartproducts', listProductsCart)

router.delete('/api/userinfo:id', deleteProductCart)

router.delete('/api/userinfo', emptyProductCart)

export default router