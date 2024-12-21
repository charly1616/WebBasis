import mongoose from "mongoose";
import ProductModel from "../Models/Model.js";

export const getProducts = async (req, res) =>{ 
    try {
        const products = await ProductModel.find({});
        res.status(200).json({sucess:true,data:products});
    } catch (error) {
        res.status(500).json({sucess:true,message:"Error de srvidor"});
        console.log(`ERROR EN EL GET ALL ${error.message}`)
    }
};

export const insertProduct = async (req, res) =>{ 
    const product = req.body;

    if (!product.name || !product.price || !product.image){
        return res.status(400).json({sucess:false,message:"Por favor brindar todos los campos"});
    }

    const newProduct = new ProductModel(product);

    try {
        await newProduct.save();
        res.status(201).json({sucess:true,data:newProduct});
    } catch (error) {
        console.error(`Error creando eso ${error}`);
        res.status(500).json({sucess:false, message:"Servidor con error"});
    }
 };


export const deleteProduct = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({sucess:false,message:"Invalid id"});
    }

    try {
        await ProductModel.findByIdAndDelete(id);
        console.log(id)
        res.status(200).json({sucess:true,message:"Product deleted"});
    } catch (error) {
        console.log(`ERROR EN EL DELETE ${error.message}`)
        res.status(404).json({sucess:false,message:"Product noe found"});
    }
};

export const updateProduct = async (req, res) => {
    const {id} = req.params;
    const product = req.body;


    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({sucess:false,message:"Invalid id"});
    }
    
    try {
        const updated = await ProductModel.findByIdAndUpdate(id,product,{new:true});
        res.status(200).json({sucess:true,data: updated});
    } catch (error) {
        console.log(`ERROR EN EL UPDATE ${error.message}`);
        res.status(500).json({sucess:false,message:"Product noe found"});
    }

};
