const express = require("express");
const User = require('../model/User');
const {createUser}= require('../controllers/post')


const router = express.Router();
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

router.post("/signup", createUser);



module.exports = router;
