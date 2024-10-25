import Leads from "../models/leadsSchema.js";

export const SaveLeads=async(req,res)=>{
    try {
        const leads=await fetch('http://localhost:3000/leads',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            }
        });
        const data=await leads.json();
        const  leadsData=await Leads.insertMany(data);
        console.log(leadsData)
        if (!leadsData)  res.status(201).json({'message':'Error Saving Data'});
        res.status(201).json({'message':'Leads Saved successFully'});

    } catch (error) {
        console.log('err',error.message)
    }
}