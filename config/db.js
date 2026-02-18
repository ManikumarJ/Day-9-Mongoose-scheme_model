import mongoose  from "mongoose";

const dbConnection = async() =>{
    try{
        const conn =  await mongoose.connect(process.env.MONGO_URL);
        console.log(`Databse connnected sucessfully`);
        
    }
    catch(err){
        console.log(`Something Error : ${err}`);
    }
}

export default dbConnection