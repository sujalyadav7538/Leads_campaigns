import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import {data} from  './dummy_data.js';
import cors from 'cors';

const app=express();

const PORT=3000

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:8000',
}))

app.get('/',(req,res)=>{
    res.send('Hello World Mock Server');
})
app.get('/leads',(req,res)=>{
   try {
     const  leads= data.leads;
     res.status(200).json(leads)
   } catch (error) {
    res.status(500).json({'message':'Fetching Issue During Leads'})
   }

})
app.get('/campaigns',(req,res)=>{
    try {
        const  campaigns= data.campaigns;
        res.status(200).json(campaigns)
    
    } catch (error) {
        res.status(500).json({'message':'Fetching Issue During Campaigns'})
    }
})

app.listen(PORT,(req,res)=>{
    console.log('Listening on Port ',PORT)
})