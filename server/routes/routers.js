const express = require("express");
const User = require('../model/User');
const {createUser, Login}= require('../controllers/post')


const router = express.Router();
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

router.post("/signup", createUser);
router.post("/login", Login);



module.exports = router;
