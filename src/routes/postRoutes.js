import express from "express";
import multer from "multer";
import { listPosts, newPost, uploadImage } from "../controllers/postController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb){
        cb(null, file.originalname);
    }
})

const upload = multer({dest: "./uploads"})

const routes = (app) => {
    app.use(express.json());

    app.get("/posts", listPosts);

    app.post("/posts", newPost);

    app.post("/upload", upload.single("imagem"), uploadImage)
}


export default routes;
