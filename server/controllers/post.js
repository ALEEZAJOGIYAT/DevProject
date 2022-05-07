const  User  = require("../model/User");
const bcrypt = require("bcrypt");
const nodemailer = require('nodemailer');
const { uuid } = require('uuidv4');



const createUser = async (req, res) => {
  const { firstName, lastName, email, Password: plaintextpassword, avatar} = req.body
  console.log(req?.body.avatar,"LINE 15 ==>")
  var success=avatar+"uploaded";
  res.send({title:"uploaded",success:success})
  const Password = await bcrypt.hash(req.body.Password, 10);
  console.log(req.body);
  const addNewUser = new User({
    firstName: firstName,
    lastName: lastName,
    Email: email,
    Password: Password,
    Image: avatar
  });
  try {
    await addNewUser.save();
    res.send("inserted");
  } catch (error) {
    console.log(error);
  }
};



const Login = async (req, res) => {
  // try {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({ status: "notok", error: "plz enter " });
  }
  console.log(req.body);
  const userLogin = await DbModel.findOne({ Email: email });
  // console.log(userLogin)
  if (userLogin) {
    const isMatch = await bcrypt.compare(password, userLogin.Password);
    // console.log(result)

    // const token = await userLogin.getAuthToken();
    // console.log(token)
    // res.cookie("jwtoken",token,{
    //     expires:new Date(Date.now()+25892000000),
    //     httpOnly:true
    // })
    if (!isMatch) {
      return res.json({ status: "400", error: "invalid" });
    } else {
      // res.sendFile(__dirname + "/")
      // const Path=path.join(__dirname,"../")
      // conaole.log(Path)
      // console.log(__dirname,"../")
      // console.log(userLogin)
      // return userLogin
      // res.send(token)
      res.send(userLogin);
      //     res.json({
      //         _id: userLogin._id,
      //         CNIC: userLogin.CNIC,
      //         Name: userLogin.Name,
      //         Role: userLogin.Role,
      //         Email: userLogin.Email,

      // })
    }
  } else {
    return res.json({ error: "invalid crediential" });
  }
};
const Email = async (req,res) =>{
const { email, role } =req.body
console.log(email , role)
const transporter = nodemailer.createTransport({
  port: 465,               // true for 465, false for other ports
  host: "smtp.gmail.com",
     auth: {
          user: 'reebasiddiqui456@gmail.com',
          pass: 'siddiqui456@',
       },
  secure: true,
  });
const mailData = {
      from: 'reebasiddiqui456@gmail.com',  // sender address
        to: email ,   // list of receivers
        subject: 'Code From Project Manager',
        text: `Hello! this is your ${uuid()} and using this ID you can enter in Workspace
        your can join as ${role}
        Thank you`
       };
       transporter.sendMail(mailData, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });

}

module.exports = {
  createUser,
  Login,
  Email
};
