import express from "express";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const app = express();

// Middleware para fazer o parse de corpos JSON
app.use(express.json());

// Middleware para fazer o parse de corpos de formulários
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
const supabaseUrl = process.env.URL;
const supabaseAnonKey = process.env.TOKEN;

const supabase = createClient(supabaseUrl, supabaseAnonKey);
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.get("/api", (req, res) => {
  res.send("Bem-vindo à minha API!");
});

app.get("/products", async (req, res) => {
  const { data, error } = await supabase.from("product").select();
  res.send(data);
});

app.post("/products", async (req, res) => {
  const { error } = await supabase.from("product").insert({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  });
  if (error) {
    res.send(error);
  }
  res.send("created!!");
});
