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
          <dt>Dessert Type</dt>
          <dd>{recipe.type}</dd>
          <dt>Age</dt>
          <dd>{recipe.age}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/'>RETURN TO LIST</Link>
      </div>
    </div>
  );
}

export default RecipeCard;
