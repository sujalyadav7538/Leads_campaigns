import express from 'express';
import { Campaignscsv, Leadscsv } from '../controller/csvController.js';

const route=express.Router();

route.get('/leads',Leadscsv);
route.get('/campaigns',Campaignscsv);

export default route;