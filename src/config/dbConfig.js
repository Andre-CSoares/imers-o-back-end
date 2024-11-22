import { MongoClient } from "mongodb";

export default async function conectarAoBanco(stringConexao){
    let mongoCliente;

    try{
        mongoCliente = new MongoClient(stringConexao);
        console.log('Conectando ao cluster do banco de dados...');
        await mongoCliente.connect();
        console.log('Conctado ao MongoDB Atlas com sucesso!');

        return mongoCliente;
    } catch (erro){
        console.log('Falha na conexão com o banco!', erro);
        process.exit();
    }
}