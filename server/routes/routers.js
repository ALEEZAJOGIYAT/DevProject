const express = require("express");
const User = require('../model/User');
const {createUser, Login, Email}= require('../controllers/post')


const router = express.Router();
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

router.post("/signup", createUser);
router.post("/login", Login);
router.post("/email", Email);



module.exports = router;
