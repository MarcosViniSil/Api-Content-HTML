import supabase from "../repositories/connection.js";
const registerProject = async (req, res) => {
    const { error } = await supabase.from("Project").insert({
      name: req.body.name,
      user: req.body.user,
    });
    if (error) {
      res.send(error);
    }
    res.send({ project: req.body.name });

};



export default registerProject;
