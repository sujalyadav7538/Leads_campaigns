import mongoose from "mongoose";

const DataBaseConnection=async()=>{
    await  mongoose.connect(process.env.MONGO_DB_URI)
    .then(console.log('Database Connected!!'))
    .catch((e)=>console.log('Mongo error',e.message))

}

export default DataBaseConnection;