import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONNECTION);

export async function getPosts(){
    const db = conexao.db("imersao-back")
    const colecao = db.collection("posts")

    return colecao.find().toArray()
}

export async function createPost(newPost) {
    const db = conexao.db("imersao-back")
    const colecao = db.collection("posts")

    return colecao.insertOne(newPost)
}