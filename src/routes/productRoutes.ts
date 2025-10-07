import { Router } from 'express';

import { getAllProducts, getProductById } from '../controller/productController';

const router = Router();

router.get('/', getAllProducts);

router.get('/:id', getProductById);

export default router;