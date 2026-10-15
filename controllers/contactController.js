//@desc Get all contacts

const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};


// get one contact

const getContact = (req,res) => {
   res.status(200).json({message: `Get contact for ${req.params.id}`})
}
//Create contact
const createContact = (req, res) => {
    console.log("The request is ", req.body);

    const {name, email, phone} = req.body;

    if(!name || !email ||!phone){
        res.status(400);
        throw new Error("All fields are mandatory!")
    }
  res.status(201).json({ message: "Contact is Created" });
};


//modify contact
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

//Delete contact
const deleteContact = (req, res) => {
    res.status(200).json({message: `Delete contact for ${req.params.id}`})
}
module.exports = {
  getContacts,
  createContact,
  updateContact,
  getContact,
  deleteContact,
};