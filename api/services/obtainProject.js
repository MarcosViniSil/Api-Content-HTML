import supabase from "../repositories/connection.js";
const project = async (req, res) => {
    const { data, error } = await supabase
        .from("Project")  
        .select("id")       
        .eq("name", req.body.name)
    if (error) {
            res.status("Erro ao buscar dados:").send(error.message);
        } else {
            if (data && data.length > 0) {
                res.send(data)
            } else {
                res.send("Credenciais inválidas.");
            }
        } 

};



export default project;
