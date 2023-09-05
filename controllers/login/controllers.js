import bcrypt from 'bcrypt'
import Users from '../../models/Users.js'

export const login = async (req,res)=>{

  const {username,password}=req.body
  
  const user = await Users.findOne()

  
  const passwordCorrect = username === null ? false 
  : await bcrypt.compare(password,user.password)
  
  if(!passwordCorrect){
    return res.status(401).json({
      error:"user o password invalid"
    })
  }else{
    return  res.json({
      username:user.username,
    
     })
  }
  
  
  }