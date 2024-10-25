import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import DataBaseConnection from './utils/dataBaseconnection.js';
import LeadsRoute from './routes/leadRoutes.js';
import CampaignRoute from './routes/campaignRoutes.js';
import PdfGenerator from './routes/pdfRoutes.js';
import CSVGenerator from './routes/csvRoutes.js';
import dotenv from 'dotenv';

dotenv.config({ path: "./.env" });

const app=express();

const PORT=8000

  
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

await DataBaseConnection();

app.get('/',(req,res)=>{
    res.send('Hello World APi Server');
})

app.use('/api/leads',LeadsRoute);
app.use('/api/campaigns',CampaignRoute);
app.use('/api/download-pdf',PdfGenerator)
app.use('/api/download-csv',CSVGenerator)


app.listen(PORT,(req,res)=>{
    console.log('Listening on Port ',PORT)
})