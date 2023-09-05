import {Router} from 'express'
import { login } from '../../controllers/login/controllers.js'




const loginrouter = Router()

loginrouter.post("/login",login)

export default  loginrouter