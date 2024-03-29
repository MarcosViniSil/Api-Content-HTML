

import express from "express";
import dotenv from "dotenv";
import controllerUser from "./controller/userController.js";
import projectController from "./controller/projectController.js"
import registerProjectPerson from "./services/registerField.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', controllerUser);
app.use('/' ,projectController)

app.post('/register/fields', registerProjectPerson);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
