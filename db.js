import mongoose from 'mongoose';
import { DB_URI,MONGO_URL_ATLAS } from './config.js';

const connectionDB = ()=>{

  const db = mongoose.connect(MONGO_URL_ATLAS)
  console.log("Conectando a la base de datos");
}

export default connectionDB