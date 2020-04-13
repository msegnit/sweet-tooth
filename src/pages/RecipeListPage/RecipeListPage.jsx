import React from 'react';
import './RecipeListPage.css';
import RecipeListItem from '../../components/RecipeListItem/RecipeListItem';

function RecipeListPage(props) {
  return (
    <>
      <h1>Recipe List</h1>
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
}
export default RecipeListPage;