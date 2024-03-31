
import dotenv from 'dotenv'
import connectmongo from './db/dbconnect.js'
dotenv.config({
    path:'./env'
})
connectmongo()