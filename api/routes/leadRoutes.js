import express from 'express';
import { SaveLeads } from '../controller/leadsController.js';

const route=express.Router();

route.get('/save',SaveLeads);

export default route;