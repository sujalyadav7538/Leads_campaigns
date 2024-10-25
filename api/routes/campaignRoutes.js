import express from 'express';
import { SaveCampaign } from '../controller/campaignController.js';

const route=express.Router();

route.get('/save',SaveCampaign);

export default route;