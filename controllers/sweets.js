var Sweet = require('../models/sweet');

module.exports = {
  index,
  create
};

async function index(req, res) {
  try{
      const sweets = await Sweet.find({});
      res.status(200).json(sweets);
  }
  catch(err){
      res.status(500).json(err);
  }
}

async function create(req, res) {
  console.log('user: ', req.user)
  try {
    const sweet = await Sweet.create(req.body);
    res.status(201).json(sweet);
  }
  catch(err){
    res.status(500).json(err);
  }
}
