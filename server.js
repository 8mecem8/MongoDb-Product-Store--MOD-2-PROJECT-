const express = require("express");
const mongoose = require('mongoose');
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')



require('dotenv').config({path:__dirname+'/.env'})


const { startAllRoutes } = require("./Routes/allRoutes");

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public'),{extensions: ["js","gif","jpg","png"]}))



const mongo = async () => 
{ 
                  mongoose.set('strictQuery', false)
  try{
     return await mongoose.connect( process.env.DB_C, {keepAlive: true,useNewUrlParser: true,useUnifiedTopology: true,}, (arg)=>{console.log("mongoose has connected ")})
    
     }
   catch{ err => {console.error('Error connecting to mongo', err)}}
}
mongo()




startAllRoutes(app)


// tell server where to listen
app.listen(4000, () => {console.log(`Server is Listening on port 4000`)});



