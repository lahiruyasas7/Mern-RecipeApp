import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import {userRouter} from './routes/users.js'

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', function(req, res) {
    res.send('Hello World');
  });
  

app.use("/auth", userRouter);

mongoose.connect(
    "mongodb+srv://lahiruyasasme:Melaniteshiya1@recipe-app.ymlhz8g.mongodb.net/Recipe-App?retryWrites=true&w=majority",
   
);

app.listen(3001, () => console.log("server is running***"));


