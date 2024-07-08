const router = require('express').Router()
const productControllers = require('../controllers/productControllers');

router.post("/api/products", productControllers.createProducts);
 

router.get('/api/products' , productControllers.getAllProducts);
 

router.get('/api/products/:id' , productControllers.getProductByID);

 
router.put('/api/products/:id' , productControllers.updateProduct); 
 

router.delete('/api/products/:id' , productControllers.deleteProduct);

module.exports = router;
 
 