// controllerUser.js

import express from "express";
import registerUser from "../services/registerUser.js";
import loginUser from "../services/loginUser.js";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.use(express.json());


router.post('/register', registerUser);


router.post('/login', loginUser);

export default router;
