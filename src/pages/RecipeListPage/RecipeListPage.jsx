import React from 'react';
import RecipeListItem from '../../components/RecipeListItem/RecipeListItem';

function RecipeListPage(props) {
    if(props.recipes.length) {
  return (
    <>
      {/* <h1>Recipe Index</h1> */}
      <div className='RecipeListPage-grid'>
        {props.recipes.map(recipe => 
          <RecipeListItem
            recipe={recipe}
            handleDeleteRecipe={props.handleDeleteRecipe}
            key={recipe._id}
          />
        )}
      </div>
    </>
    );
  } else {
    return<h3>No Recipes Listed</h3>
  }
}
export default RecipeListPage;