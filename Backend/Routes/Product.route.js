import express from "express";
import { deleteProduct, getProducts, insertProduct, updateProduct } from "../Controllers/Product.Controller.js";

const router = express.Router();


router.get("/",getProducts);

router.post("/",insertProduct);

router.delete("/:id", deleteProduct);

router.put("/:id", updateProduct);


export default router;