import React from 'react';
import PropTypes from 'prop-types';
import RecipeDetail from './RecipeDetail';

class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: null
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`${process.env.REACT_APP_API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(recipe => this.setState({ recipe }));
  }

  render() {
    const { recipe } = this.state;

    return (
      <div>
        <RecipeDetail details={recipe} />
      </div>
    );
  }
}

Recipe.propTypes = {
  match: PropTypes.object
};

export default Recipe;
