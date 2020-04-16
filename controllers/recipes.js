const Recipe = require('../models/recipe');

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
};

async function index(req, res) {
  const recipes = await Recipe.find({user:req.user.id});
  res.status(200).json(recipes);
}

async function show(req, res) {
  const recipe = await Recipe.findById(req.params.id);
  res.status(200).json(recipe);
}

async function create(req, res) {
  const recipe = await Recipe.create(req.body);
  res.status(201).json(recipe);
}

async function deleteOne(req, res) {
  const deletedRecipe = await Recipe.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedRecipe);
}

async function update(req, res) {
  const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedRecipe);
}