// controllerUser.js

import express from "express";
import registerProject from "../services/registerProject.js"
import project from "../services/obtainProject.js"
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.use(express.json());


router.post('/register/project', registerProject);


router.post('/obtain/project', project);

export default router;
