import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RecipeList from './RecipeList';

const FavoritesWrapper = styled.div`
  display: block;
  padding-left: 80px;
`;

const Favorites = ({ state, toggleFavorite }) => {
  return (
    <FavoritesWrapper>
      <h2>Favorites</h2>
      <RecipeList
        recipes={state.recipes.filter(r => state.favorites.includes(r.id))}
        favorites={state.favorites}
        onFavorited={toggleFavorite}
      />
    </FavoritesWrapper>
  );
};

Favorites.propTypes = {
  state: PropTypes.object,
  toggleFavorite: PropTypes.func
};

export default Favorites;
