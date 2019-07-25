const router      = require('express').Router();
const authRoutes  = require('./authRoutes');
const todoRoutes  = require('./todoRoutes');

const authMiddlewares = require('./../../middlewares/authMiddlewares');



router.use('/auth', authRoutes);
router.use('/todo', todoRoutes);

module.exports = router;