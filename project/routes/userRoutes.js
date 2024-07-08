const router = require('express').Router();
const userControllers = require('../controllers/userControllers');

router.post('/', userControllers.createUser);
router.get('/', userControllers.getAllUsers);
router.get('/:id', userControllers.getUserByID);
router.put('/:id', userControllers.updateUser);
router.delete('/:id', userControllers.deleteUser);

module.exports = router;
