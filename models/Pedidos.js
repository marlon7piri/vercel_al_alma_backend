import mongoose from "mongoose"
import {Schema}  from "mongoose"



const PedidoSchema = new Schema({

  nombre:{
    type:String,

  },

  cantidad:{
    type:Number,
   
  }
 

  
})

PedidoSchema.set("toJSON",{
  transform:(document,returnedObject)=>{
    returnedObject.id=returnedObject._id
  
    delete returnedObject.__v
    delete returnedObject._id
  }
})

export default mongoose.model("Pedido",PedidoSchema)