import supabase from "../repositories/connection.js"

const registerUser = async (req, res) =>{
  console.log("validateEmail(req.body.email)",validateEmail(req.body.email))
  console.log("req.body.password.length>=8",req.body.password.length>=8)
  console.log(req.body.password.length)
    if(validateEmail(req.body.email) && (req.body.password.length>=8 && req.body.password.length<=20)){
    const { error } = await supabase.from("Person").insert({
        
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
      });
      if (error) {
        res.send(error);
      }
      res.send("created!!");
    }else{
        res.send("Usuario invalido");
    }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export default registerUser;