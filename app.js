import express from 'express';
import cors from 'cors';
import routes from './routes/productos/rutas.js';
import routespedidos from './routes/pedidos/rutas.js'
import routesusers from './routes/users/rutas.js'
import loginrouter from './routes/login/index.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)
app.use(routespedidos)
app.use(routesusers)
app.use(loginrouter)


export default app;