import {Router} from 'express';
import {getProductsRequest,createProductRequest,getProductRequest,updateProductRequest,deleteProductRequest} from '../../controllers/productos/controllers.js';



const routes = Router();

routes.get("/productos",getProductsRequest)
routes.post("/productos",createProductRequest)
routes.delete("/productos/:id",deleteProductRequest)
routes.get("/productos/:id",getProductRequest)
routes.put("/productos/:id",updateProductRequest)



export default routes