import supabase from "../repositories/connection.js";
const content = async (req, res) => {
    const { data, error } = await supabase
        .from("Person_Project")  
        .select("type,content")       
        .eq("id", req.body.id)
    if (error) {
            res.status("Erro ao buscar dados:").send(error.message);
        } else {
            if (data && data.length > 0) {
                res.send({ valores: data});
            } else {
                res.send("Credenciais inválidas.");
                res.send({ message: "Credenciais inválidas."});
            }
        } 

};



export default content;
