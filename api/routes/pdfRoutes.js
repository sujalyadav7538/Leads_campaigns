import express from 'express';
import { Campaignpdf, Leadspdf } from '../controller/pdfController.js';

const route=express.Router();

route.get('/leads',Leadspdf);
route.get('/campaigns',Campaignpdf);

export default route;