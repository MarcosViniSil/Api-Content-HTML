import express from "express";
import dotenv from "dotenv";
import test from "./controller/test.js";
import supabase from "./repositories/connection.js"
import registerUser from "./services/registerUser.js"
import loginUser from "./services/loginUser.js"

dotenv.config();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.get('/test', test);
app.post('/register', registerUser);
app.post('/login', loginUser);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// app.get("/api", (req, res) => {
//   res.send("Bem-vindo à minha API!");
// });

// app.get("/products", async (req, res) => {
//   const { data, error } = await supabase.from("product").select();
//   res.send(data);
// });

// app.post("/products", async (req, res) => {
//   const { error } = await supabase.from("product").insert({
//     name: req.body.name,
//     description: req.body.description,
//     price: req.body.price,
//   });
//   if (error) {
//     res.send(error);
//   }
//   res.send("created!!");
// });
