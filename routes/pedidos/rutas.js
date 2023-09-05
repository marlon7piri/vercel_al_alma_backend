import {Router} from 'express'
import { getPedido ,crearPedido} from '../../controllers/pedidos/controllers.js'

const routes = Router()

routes.get("/pedidos",getPedido)
routes.post("/pedidos",crearPedido)

  export default routes