import React from 'react';
import {Link} from 'react-router-dom';
import './RecipeListItem.css';

function RecipeListItem({recipe, handleDeleteRecipe}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{recipe.name}</h3>
      </div>
      <div className='panel-footer RecipeListItem-action-panel'>
        <Link
          className='btn btn-xs btn-info'
          to={{
            pathname: '/details',
            state: {recipe}
          }}
        >
          DETAILS
        </Link>
        <Link
          className='btn btn-xs btn-warning'
          to={{
            pathname: '/edit',
            state: {recipe}
          }}
        >
          EDIT
        </Link>
        <button
          className='btn btn-xs btn-danger margin-left-10'
          onClick={() => handleDeleteRecipe(recipe._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default RecipeListItem;