import React from 'react';
import PropTypes from 'prop-types';

import RecipeListItem from './RecipeListItem';

const RecipeList = props => {
  return (
    <div className={props.className}>
      <ul>
        {props.recipes.map(recipe => (
          <RecipeListItem
            recipe={recipe}
            favorited={props.favorites.includes(recipe.id)}
            onClick={() => props.onClick(recipe.id)}
            onFavorited={() => props.onFavorited(recipe.id)}
            key={recipe.id}
          />
        ))}
      </ul>
    </div>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.array,
  className: PropTypes.string,
  onClick: PropTypes.func,
  favorites: PropTypes.array,
  onFavorited: PropTypes.func
};

export default RecipeList;
