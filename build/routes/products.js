import { Router } from 'express';
import productsController from '../controllers/products.controller.js';
const router = Router();
router.get('/', productsController.getProductsList);
export default router;
//# sourceMappingURL=products.js.map