import express from 'express';
import connectDatabase from './config/db';
import api from '/src/server/api/index.js/';
//Init express app
const app = express();
//API Endpoints
connectDatabase();


app.get('/', (req,res)=>res.send('http get request to root api'));
app.listen(3000,() => console.log("listening on port 3000"));   
