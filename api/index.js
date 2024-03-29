import express from "express";
import dotenv from "dotenv";
import userController from "./controller/userController.js";
import projectController from "./controller/projectController.js"
import registerProjectPerson from "./services/registerField.js";
import cors  from 'cors'
import content from './services/content.js'



dotenv.config();

const app = express();

app.use(cors({ origin: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', userController);
app.use('/' ,projectController)

app.post('/register/fields', registerProjectPerson);
app.post('/get/content', content);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
