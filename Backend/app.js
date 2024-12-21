import express from "express";

const app = express();


app.get("/",(req, res) =>{
    res.send("ServidorListo");
})


app.listen(5000, ()=>{
    console.log("app ")
}
);