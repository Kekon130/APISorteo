const { Router } = require('express');
const userController = require('../Controllers/userController');

const router = Router();

router.post('/createUser', userController.createUser);
router.get('/getUser', userController.getUser);
router.patch('/updateUser', userController.updateUser);
router.delete('/deleteUser', userController.deleteUser);

module.exports = router;
