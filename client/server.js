import { decodeBase64 } from 'bcryptjs';
import express from 'express';
import connectDatabase from './config/db';
import cors from 'cors';
import {check, validationResult} from 'express-validator';
//import api from '/src/server/api/index.js/';
//Init express app
const app = express();
//API Endpoints
//();
connectDatabase();
//testing
app.use(express.json({extended: false }));
app.use(
   cors({
       origin: 'http://localhost:3000'
   }) 
);

app.get('/', (req, res) => res.send('http get request to root api'));
app.listen(5000, () => console.log("listening on port 5000"));   
