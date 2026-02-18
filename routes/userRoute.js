import express from 'express'
import { addData } from '../controllers/dataController.js'

const route = express.Router()

route.post("/adddata", addData)

export default route


// http://localhost:5000/api/user/adddata