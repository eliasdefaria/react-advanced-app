import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecipeDetail = props => {
  if (!props.details) {
    return <p>Please select a recipe to see the details...</p>;
  }

  return (
    <div className={props.className}>
      <h1>{props.details.name}</h1>
      <h2>
        Category:
        {props.details.category}
      </h2>
      <img src={props.details.image} alt="Food" />
      <Link to={`/recipe/${props.details.id}`}>See More</Link>
    </div>
  );
};

RecipeDetail.propTypes = {
  details: PropTypes.object,
  className: PropTypes.string
};

export default RecipeDetail;
