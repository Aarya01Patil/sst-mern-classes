const router = require('express').Router()
const userControllers = require('../controllers/userControllers');

router.post("/api/users", userControllers.createUser);


router.get('/api/users' , userControllers.getAllUsers);


router.get('/api/users/:id' , userControllers.getUserByID);


router.put('/api/users/:id' , userControllers.updateUser);


router.delete('/api/users/:id' , userControllers.deleteUser);

module.exports = router;