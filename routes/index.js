const router = require('express').Router();
const UserController = require('../controllers/UserController');
const productRoutes = require('./product');

router.get('/', (req, res) => {
    res.send('Hello World!')
})
router.post('/register', UserController.register);
router.post('/login/admin', UserController.loginAdmin);
router.post('/login/customer', UserController.loginCustomer);

router.use('/products', productRoutes);


module.exports = router;
