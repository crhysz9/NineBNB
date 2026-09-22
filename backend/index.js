import 'dotenv/config';
import express from 'express';
<<<<<<< HEAD
import UserRoutes from './domains/users/routes.js';
=======
>>>>>>> 53a350ac19d0c92d415cee744925d9fb2da3578c

const app = express();
const { PORT } = process.env;

<<<<<<< HEAD
app.use(express.json());
app.use('/users', UserRoutes)
=======
app.get('/', (req, res) => {
    res.json([{
        message: 'TA PRESTANDO PAI, CALMA...'
    }])
})
>>>>>>> 53a350ac19d0c92d415cee744925d9fb2da3578c

app.listen(PORT, () => {
    console.log(`SERVIDOR TA RODANDO NA PORTA ${PORT}`)
});
