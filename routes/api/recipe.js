const express = require('express');
const router = express.Router();
const recipesCtrl = require('../../controllers/recipes');

/*------------------------------ Public Routes ------------------------------*/

router.get('/', recipesCtrl.index);
router.get('/:id', recipesCtrl.show);
router.post('/', recipesCtrl.create);
router.delete('/:id', recipesCtrl.delete);
router.put('/:id', recipesCtrl.update);

/*----------------------------- Protected Routes ----------------------------*/

// Process the token for only the routes below
router.use(require('../../config/auth'));
router.post('/', recipesCtrl.create);

/*----------------------------- Helper Functions ----------------------------*/

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
