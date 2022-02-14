import { decodeBase64 } from 'bcryptjs';
import express from 'express';
import connectDatabase from './config/db.js';
//import connectDatabase from ''

//import api from '/src/server/api/index.js/';
//Init express app
const app = express();
//API Endpoints
//();
connectDatabase();
//testing


app.get('/', (req, res) => res.send('http get request to root api'));
app.listen(3000, () => console.log("listening on port 3000"));   
