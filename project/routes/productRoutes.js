const router = require('express').Router()
const productControllers = require('../controllers/productControllers');

router.post('/', productControllers.createProducts);
router.get('/' , productControllers.getAllProducts);
router.get('/:id' , productControllers.getProductByID);
router.put('/:id' , productControllers.updateProduct); 
router.delete('/:id' , productControllers.deleteProduct);

module.exports = router;
 
 