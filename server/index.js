const express = require('express');
const mongoose = require('mongoose');
const app = express();
// const router = require('./routes/post')
const routers = require('./routes/routers')

// const DbModel = require('./model/UserDb')
const cors = require('cors')
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb+srv://crud:crud@cluster0.4h3wm.mongodb.net/NewUserAdded?retryWrites=true&w=majority',{ useNewUrlParser : true})



app.use(routers)
app.listen(4000,()=>console.log("App listening on 4000"))