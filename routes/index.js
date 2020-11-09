const router = require('express').Router();
const UserController = require('../controllers/UserController');

router.post('/register', UserController.register);
router.post('/login/admin', UserController.loginAdmin);

module.exports = router;
