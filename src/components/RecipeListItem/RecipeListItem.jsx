import React from 'react';
import {Link} from 'react-router-dom';

function RecipeListItem({recipe, handleDeleteRecipe}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
  <h3 className='panel-title'>{recipe.title}</h3>
      </div>
      <div className='panel-footer RecipeListItem-action-panel'>
        <Link
          className='ui button'
          to={{
            pathname: '/details',
            state: {recipe}
          }}
        >
          Details
        </Link>
        {/* &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; */}
        <Link
          className='ui button'
          to={{
            pathname: '/edit',
            state: {recipe}
          }}
        >
          Edit
       </Link>
        <Link
          className='ui button'
          onClick={() => handleDeleteRecipe(recipe._id)}>
          Delete
        </Link>
      </div>
    </div>
  );
}

export default RecipeListItem;