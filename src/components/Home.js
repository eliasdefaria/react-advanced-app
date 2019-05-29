import React from 'react';
import styled from 'styled-components';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
import './App.css';

const BigButton = styled.button`
  padding: 50px;
  background-color: red;
`;

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      currentRecipe: null
    };
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URL}/v1/recipes`)
      .then(res => res.json())
      .then(recipes => this.setState({ recipes }));
  }

  onRecipeClick = id => {
    fetch(`${process.env.REACT_APP_API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(recipe => this.setState({ currentRecipe: recipe }));
  };

  render() {
    const { recipes, currentRecipe } = this.state;
    return (
      <div className="teal-background">
        <main className="d-flex">
          <RecipeList
            recipes={recipes}
            onClick={this.onRecipeClick}
            className="flex-3"
          />
          <RecipeDetail details={currentRecipe} className="flex-5" />
        </main>
        <BigButton />
      </div>
    );
  }
}

export default Home;
