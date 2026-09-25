import 'dotenv/config';
import { Router } from 'express';
import { connectDb } from '../../config/db.js';
import User from './model.js';
import bcrypt, { hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = Router();
const bcryptSalt = bcrypt.genSaltSync();
const { JWT_SECRET_KEY } = process.env;

router.get('/', async (req, res) => {

    connectDb();

    try {

        const userDoc = await User.find();

        res.json(userDoc);

    } catch (error) {
        res.status(500).json(error);
    }

});

router.post('/', async (req, res) => {

    connectDb();

    const { name, email, password } = req.body;
    const encryptedPassword = bcrypt.hashSync(password, bcryptSalt);

    try {

        const newUserDoc = await User.create({
        name,
        email,
        password: encryptedPassword,
        });

        res.json(newUserDoc);

    } catch (error) {
        res.status(500).json(error);
    }

});

router.post('/login', async (req, res) => {

    connectDb();

    const {email, password} = req.body;

    try {

        const userDoc = await User.findOne({ email });
        const { _id, name } = userDoc;

        if (userDoc){

            const passwordCorret = bcrypt.compareSync(password, userDoc.password);

            if (passwordCorret){

                const newUserObj = {_id, name, email};
                const token = jwt.sign(newUserObj, JWT_SECRET_KEY);

                res.cookie("token", token).json(newUserObj);

            } else{
                res.status(400).json('Senha incorreta!');
            }  

        } else {
            res.status(400).json('Usuário não encontrado!', error);
        }

    } catch (error) {
        res.status(500).json(error)
    }

});

export default router;
