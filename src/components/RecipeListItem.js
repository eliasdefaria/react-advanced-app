import React from 'react';
import PropTypes from 'prop-types';

const RecipeListItem = ({ recipe, favorited, onClick, onFavorited }) => (
  <li onClick={() => onClick(recipe.id)}>
    <span
      className="mr-2"
      onClick={e => {
        e.stopPropagation();
        onFavorited(recipe.id);
      }}
      role="button"
      tabIndex="0"
    >
      {favorited ? 'isFavorites' : 'isNotFavorite'}
    </span>

    <span>{recipe.name}</span>
    <span>{recipe.category}</span>
  </li>
);

RecipeListItem.propTypes = {
  recipe: PropTypes.object,
  favorited: PropTypes.bool,
  onClick: PropTypes.func,
  onFavorited: PropTypes.func
};

export default RecipeListItem;
