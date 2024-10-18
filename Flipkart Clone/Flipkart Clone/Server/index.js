
//const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from'./database/db.js';
import { DefaultData, PincodeData} from './default.js';

import Routes from './routes/route.js';

dotenv.config();
const app= express();

const PORT = 8000;


const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () => console.log(`Server is Running Succesfully on port ${PORT}`));

DefaultData();
PincodeData();



app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',Routes);


