import {Schema} from 'mongoose'
import mongoose from 'mongoose'



const UserSchema = new Schema({
  username:{
    type:String,
  
  },
  password:{
    type:String,

  }
})
UserSchema.set("toJSON",{
transform:(document,returnedObject)=>{
  returnedObject.id=returnedObject._id
  delete returnedObject._id
  delete returnedObject.__v
  delete returnedObject.password

}
})


export default mongoose.model("User",UserSchema)