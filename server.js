import express from "express";

const posts = [
    { 
        "id": 1,
        "descricao": "teste", 
        "imagem": "https://placecats.com/millie/300/150"
    },
    { 
        "id": 2,
        "descricao": "teste", 
        "imagem": "https://placekitten.com/400/300"
    },
    { 
        "id": 3,
        "descricao": "teste", 
        "imagem": "https://placekitten.com/200/200"
    },
    { 
        "id": 4,
        "descricao": "teste", 
        "imagem": "https://placekitten.com/300/200"
    },
    { 
        "id": 5,
        "descricao": "teste", 
        "imagem": "https://placecats.com/millie/300/150"
    },
    { 
        "id": 6,
        "descricao": "teste", 
        "imagem": "https://placekitten.com/400/300"
    }
]

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("servidor ligou");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);
});