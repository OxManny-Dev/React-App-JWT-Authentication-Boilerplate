const router      = require('express').Router();
const authRoutes  = require('./authRoutes');

const authMiddlewares = require('./../../middlewares/authMiddlewares');

router.route('/')
  .get(authMiddlewares.requireSignIn, (req, res) => {
    res.send('Hi');
  });

router.use('/auth', authRoutes);

module.exports = router;