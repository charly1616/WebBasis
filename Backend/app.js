import express from "express";
import dotenv from"dotenv";
import { connectDB } from "./Config/db.js";
import productRoutes from "./Routes/Product.route.js";

dotenv.config();

const app = express();
app.use(express.json());


app.use("/api/products", productRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    connectDB();
    console.log("app se empezó en http://localhost:"+PORT);
}
);



