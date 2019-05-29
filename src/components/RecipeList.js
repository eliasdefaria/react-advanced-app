import React from 'react';
import PropTypes from 'prop-types';

const RecipeList = (props) => {
  return(
    <div className={props.className}>
      <h2>Recipes</h2>
      <ul>
        {props.recipes.map(recipe => (
          <li
            key={recipe.id}
            onClick={() => props.onClick(recipe.id)}
          >
            <span>{recipe.name}</span>
            <span>{recipe.category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default RecipeList;
