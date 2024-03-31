import mongoose from 'mongoose'

   
import  dbname  from '../constants.js'
const connectmongo=async()=>{
    try {
     const conect=await mongoose.connect(`${process.env.MONGODBURI}/${dbname}`)
    console.log(`mongo connected !! db host  ${conect.connection.host}`)
    } catch (error) {
     console.log('db error is ')
     throw error
    }
 }
 export default connectmongo

