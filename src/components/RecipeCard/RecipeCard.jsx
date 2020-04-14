import React from 'react';
import {Link} from 'react-router-dom';

function RecipeCard({recipe}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{recipe.name}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Ingredients</dt>
          <dd>{recipe.ingredients}</dd>
          <dt>Instructions</dt>
          <dd>{recipe.instructions}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/'>Return To Recipe List</Link>
      </div>
    </div>
  );
}

export default RecipeCard;
