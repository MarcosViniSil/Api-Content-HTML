import supabase from "../repositories/connection.js";
const registerProjectPerson = async (req, res) => {
    const { error } = await supabase.from("Person_Project").insert({
      id_person: req.body.id_person,
      id_project: req.body.id_project,
      type: req.body.type,
      content: req.body.content,
    });
    if (error) {
      res.send(error);
    }
    res.send("created!!");

};



export default registerProjectPerson;