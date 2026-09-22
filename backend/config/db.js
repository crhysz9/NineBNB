import 'dotenv/config';
import mongoose from 'mongoose';

const { MONGO_URL } = process.env;

<<<<<<< HEAD
export const connectDb = async () => {
    try {

        await mongoose.connect(MONGO_URL);
        console.log("DEU CERTO CONECTAR COM O BANCO DE DADOS PAI!")
    
    } catch (error) {

        console.log("DEU ERRADO AÍ PAI!" , error)

    }
=======
try {

    mongoose.connect(MONGO_URL);
    console.log("DEU CERTO CONECTAR COM O BANCO DE DADOS PAI!")
    
} catch (error) {
    console.log("DEU ERRADO AÍ PAI!" , error)
>>>>>>> 53a350ac19d0c92d415cee744925d9fb2da3578c
}
