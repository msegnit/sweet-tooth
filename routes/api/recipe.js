const express = require('express');
const router = express.Router();
const recipesCtrl = require('../../controllers/recipes');

/*------------------------------ Public Routes ------------------------------*/
/*----------------------------- Protected Routes ----------------------------*/

// Process the token for only the routes below
router.use(require('../../config/auth'));
router.post('/', checkAuth, recipesCtrl.create);
router.get('/', checkAuth, recipesCtrl.index);
router.get('/:id', checkAuth, recipesCtrl.show);
router.delete('/:id', checkAuth, recipesCtrl.delete);
router.put('/:id', checkAuth, recipesCtrl.update);

/*----------------------------- Helper Functions ----------------------------*/

 function checkAuth(req, res, next) {
   if (req.user) return next();
   return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
