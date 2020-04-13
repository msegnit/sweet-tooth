import React from 'react';
import RecipeCard from '../../components/RecipeCard/RecipeCard';

function RecipeDetailPage(props) {
  const recipe = props.location.state.recipe;
  return (
    <>
      <h1>Recipe Details</h1>
      <RecipeCard
        key={recipe._id}
        recipe={recipe}
      />
    </>
  );
}
export default RecipeDetailPage;