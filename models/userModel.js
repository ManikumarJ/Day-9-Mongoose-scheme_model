import mongoose, { mongo } from "mongoose";

const userSchema = new  mongoose.schema(
    {
        userName : {type:String, required:true},
        userEmail : {type:String, required:true, unique : true},
        userAge : {type:Number, required:true}

    },
    {timestamps : true}
)

const userModel = mongoose.model( "userData", userSchema)

export default userModel