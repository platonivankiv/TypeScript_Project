import { Router } from 'express'
import { ProductsController } from '../controllers/products.controller.js'
import { container } from '../inversify.config.js'

const router = Router()
const productsController = container.get<ProductsController>(ProductsController)

router.get('/', productsController.getProductsList.bind(productsController))
router.get('/:id', productsController.getOneProduct.bind(productsController))
router.post('/', productsController.createProduct.bind(productsController))
router.put('/:id', productsController.updateProduct.bind(productsController))
router.delete('/:id', productsController.deleteProduct.bind(productsController))

export default router
