const router = require('express').Router();
const { addProduct, updateProduct, getOneProduct, getAllProduct, deleteProduct } = require('../controller/productController');
const upload = require('../middlewares/multer');

router.post('/product', upload.single('productImage'), addProduct);
router.patch('/product/:id', upload.single('productImage'), updateProduct);
router.get('/product/:id', getOneProduct);
router.get('/product', getAllProduct);
router.delete('/product/:id', deleteProduct)
module.exports = router