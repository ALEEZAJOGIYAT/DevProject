const User = require("../model/User");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const { uuid } = require("uuidv4");

const createUser = async (req, res) => {
	const {
		firstName,
		lastName,
		email,
		Password: plaintextpassword,
		avatar,
	} = req.body;
	console.log(req?.body.avatar, "LINE 15 ==>");
	var success = avatar + "uploaded";
	res.send({ title: "uploaded", success: success });
	const Password = await bcrypt.hash(req.body.Password, 10);
	console.log(req.body);
	const addNewUser = new User({
		firstName: firstName,
		lastName: lastName,
		Email: email,
		Password: Password,
		Image: avatar,
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
	const userLogin = await User.findOne({ Email: email });
	if (userLogin) {
		const isMatch = await bcrypt.compare(password, userLogin.Password);
		if (!isMatch) {
			return res.json({ status: "400", error: "invalid" });
		} else {
			res.send(userLogin);
		}
	} else {
		return res.json({ error: "invalid crediential" });
	}
};
const Email = async (req, res) => {
	const { email, role, key, projectName } = req.body;
	console.log(email, role, key, projectName);
	const transporter = nodemailer.createTransport({
		port: 465, // true for 465, false for other ports
		host: "smtp.gmail.com",
		auth: {
			user: "sadiasiddiqui654@gmail.com",
			pass: "sadia123$",
		},
		secure: true,
	});
	const mailData = {
		from: "aleezajogiyat09@gmail.com", // sender address
		to: email, // list of receivers
		subject: "Token From Project Manager",
		text: `Hello! this is your ${key} of the project ${projectName} and using this ID you can enter in Workspace
        your can join as ${role} and Click on below Link
        http://localhost:3000/activate
        Thank you`,
	};
	transporter.sendMail(mailData, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log("Email sent: " + info.response);
		}
	});
};

module.exports = {
	createUser,
	Login,
	Email,
};
