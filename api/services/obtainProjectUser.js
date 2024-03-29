import supabase from "../repositories/connection.js";
const projectsUser = async (req, res) => {
    const { data, error } = await supabase
        .from("Project")  
        .select("id")       
        .eq("user", req.body.user)
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



export default projectsUser;
