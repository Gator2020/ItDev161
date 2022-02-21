//import { decodeBase64 } from 'bcryptjs';
import express from 'express';
import res from 'express/lib/response';
import connectDatabase from './config/db.js';
import {check, validationResult} from 'express-validator';
import cors from 'cors';
const app = express();

connectDatabase();
app.get('/', (req, res) => res.send('http get request to root api'));

//import connectDatabase from ''
//
app.use(express.json({extended: false }));
app.use(
   cors({
       origin: 'http://localhost:5000'
   }) 
);
//import api from '/src/server/api/index.js/';
//Init express app
/**
 * @route POST api/users
 * @desc Register user
 * 
 */
 app.get('/', (req, res) => res.send('http get request to root api'));
 /**
  * @route GET /
  * @desc
  * 
  */
 app.post('/api/users',
 [
     check('name', 'please Enter your name').not().isEmpty(),
     check('email','Please enter your email' ).isEmail(),
     check('password', 'please enter password containing 6 or more chars').isLength({min :6})
 
 ],
 (req, res) =>
 {
     const errors = validationResult(req);
     if(!errors.isEmpty())
     {
         return res.status(422).json({errors: errors.array()});
     }
     else
     {
         return res.send(req.body);
     }
     console.log(req.body);
     res.send(req.body);
 }
 )
 //const app = express();
 //API Endpoints
 //();
//app.use(express.json({extended: false}));
//app.get('/', (req, res) => res.send('http get request sent to root api endpoint'));
/**
 *
 * 
 * 
 * 
 */
// app.get('/', (req, res) => res.send('http get request to root api'));


//testing



app.listen(5000, () => console.log("listening on port 5000"));   
