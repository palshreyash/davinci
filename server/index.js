import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import userroute from './routes/users.js';

const app =express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

app.use('/users',userroute);
app.get("/", (req, res) => {
    res.send("this works!!");
  });

const CONNETION_URL = "mongodb+srv://shrey:shrey@cluster0.i41pc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const port = process.env.PORT || 4000;

mongoose.connect(CONNETION_URL)
.then(()=>app.listen(port,()=>console.log(`server runnning on port: ${port}`)))
.catch((err)=>console.log(err.message));