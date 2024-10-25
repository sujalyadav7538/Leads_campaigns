import Campaigns from "../models/campaignSchema.js";

export const SaveCampaign=async(req,res)=>{
    try {
        const campaigns=await fetch('http://localhost:3000/campaigns',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            }
        });
        const data=await campaigns.json();
        const  campaignData=await Campaigns.insertMany(data);
        console.log(campaignData)
        if (!campaignData)  res.status(201).json({'message':'Error Saving Data'});
        res.status(201).json({'message':'Campaigns Saved successFully'});

    } catch (error) {
        console.log('err',error.message)
    }
}