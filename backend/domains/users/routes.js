import 'dotenv/config';
import { Router } from 'express';
import { connectDb } from '../../config/db.js';
import User from './model.js';
import bcrypt, { hash } from 'bcryptjs';
import { JWTSign, JWTVerify } from '../../utils/jwt.js';

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
        throw error;
    }

});

router.get('/profile', async (req, res) => {

    const userInfo = await JWTVerify(req);
    res.json(userInfo);

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

        const { _id } = newUserDoc;
        const newUserObj = { name, email, _id };

        try {

            const token = await JWTSign(newUserObj);
            res.cookie("token", token).json(newUserObj);

        } catch (error) {

            res.status(500).json('Erro ao assinar o token!', error);

        }

    } catch (error) {
        res.status(500).json(error);
        throw error;
    }

});

router.post('/login', async (req, res) => {

    connectDb();

    const { email, password } = req.body;

    try {

        const userDoc = await User.findOne({ email });

        if (userDoc) {

            const passwordCorret = bcrypt.compareSync(password, userDoc.password);
            const { _id, name } = userDoc;

            if (passwordCorret) {

                const newUserObj = { _id, name, email };
                try {
                    const token = await JWTSign(newUserObj);
                    res.cookie("token", token).json(newUserObj);
                } catch (error) {
                    console.error(error)
                    res.status(500).json('Erro ao assinar com JWT!');
                }

            } else {
                res.status(400).json('Senha incorreta!');
            }

        } else {
            res.status(400).json('Usuário não encontrado!', error);
        }

    } catch (error) {
        res.status(500).json(error)
    }

});

router.post('/logout', async (req, res) => {
    res.clearCookie('token').json('DESLOGADO COM SUCESSO!')
})

export default router;
