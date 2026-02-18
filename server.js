import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import userRoute from './routes/userRoute.js'
import dbConnection from './config/db.js'

dotenv.config()
const PORT = process.env.PORT || 3000;

dbConnection()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/user",userRoute)

app.listen(PORT, ()=>{
console.log(`Server is ON : http://localhost:${PORT} `);

})

// http://localhost:5000//api/user