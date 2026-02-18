import userModel from "../models/userModel.js";

export const addData = async(req, res)=>
{
    try{
        console.log(req.body);

        const {userName, userEmail, userAge} = req.body

        const addDataDb = await userModel.create({userName, userEmail, userAge})

        res.status(201).json({msg:"successfully added to the database"})
        
    }
    catch(err){
        console.log(err);
        
    }
}


//  userName, userEmail, userAge