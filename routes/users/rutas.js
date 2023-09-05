import {Router} from 'express'
import {getUser,createUser} from '../../controllers/users/controllers.js'

const routesusers = Router()

routesusers.get("/user",getUser)
routesusers.post("/user",createUser)

  export default routesusers