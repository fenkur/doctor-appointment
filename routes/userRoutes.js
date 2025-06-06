const express = require('express');
const router = express.Router();


// Routes
router.post('/login', loginController);
router.post('/register', registerController);

module.exports = router;