const  User  = require("../model/User");



const createUser = async (req, res) => {
  console.log(req.body);
  const addNewUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    Email: req.body.email,
    Password: req.body.Password,
  });
  try {
    await addNewUser.save();
    res.send("inserted");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
};
