import 'dotenv/config';
import mongoose from 'mongoose';

const { MONGO_URL } = process.env;

export const connectDb = async () => {
    try {

        await mongoose.connect(MONGO_URL);
        console.log("DEU CERTO CONECTAR COM O BANCO DE DADOS PAI!")
    
    } catch (error) {

        console.log("DEU ERRADO AÍ PAI!" , error)

    }
}
