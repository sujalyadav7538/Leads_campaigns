import mongoose from 'mongoose';

const LeadsSchema=new mongoose.Schema({
        name:{
            type:String,
            required:[true,'Name is Required']
        },
        email:{
            type:String,
            required:[true,'Email is Required']
        },
        status:{
            type:String,
            required:[true,'Status is Required']
        },
        source:{
            type:String,
            required:[true,'Source is Required']
        }
})

const Leads=mongoose.model('Leads',LeadsSchema);
export default Leads;