import { Router } from 'express'
import productsController from '../controllers/products.controller.js'

const router = Router()

router.get('/', productsController.getProductsList)
router.get('/:id', productsController.getOneProduct)
router.post('/', productsController.createProduct)
router.put('/:id', productsController.updateProduct)
router.delete('/:id', productsController.deleteProduct)

export default router
