import supabase from "../repositories/connection.js"

const loginUser = async (req, res) =>{
    if(validateEmail(req.body.email) && (req.body.password.length>=8 && req.body.password.length<=20)){

    const { data, error } = await supabase
        .from("Person")  
        .select("email,password")       
        .eq("email", req.body.email)
        .eq("password",req.body.password)

    if (error) {
        res.status("Erro ao buscar dados:").send(error.message);
    } else {
        if (data && data.length > 0) {
            res.send(req.body.email)
        } else {
            res.send("Credenciais inválidas.");
        }
    }
    }else{
        res.send("Informações inválidas.");
    }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}



function generateRandomNumberCode(length) {
    let code = '';
    for (let i = 0; i < length; i++) {
        code += Math.floor(Math.random() * 10); 
    }
    return code;
}



export default loginUser;