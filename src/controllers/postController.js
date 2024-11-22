import {getPosts, createPost} from "../models/postsModel.js";
import fs from "fs";
import path from "path";

export async function listPosts(req, res) {
    const result = await getPosts();

    res.status(200).json(result);   
}

export async function newPost(req, res) {
    const new_post = req.body;
    try {
        const createdPost = await createPost(new_post); 
        res.status(200).json(createdPost);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({"Erro": "Falha na requisição"});
    }
}

export async function uploadImage(req, res) {
    const new_post = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    }

    try {
        const createdPost = await createPost(new_post); 
        const imagemAtualizada = path.join("uploads", `${createdPost.insertedId}.png`);
        fs.renameSync(req.file.path, imagemAtualizada)
        res.status(200).json(createdPost);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({"Erro": "Falha na requisição"});
    }
}