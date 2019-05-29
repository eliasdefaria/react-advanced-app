import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
import './App.css';

const BigButton = styled.button`
  padding: 50px;
  background-color: red;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      currentRecipe: null,
      isOpen: true
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

  onButtonClick = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { recipes, currentRecipe, isOpen } = this.state;
    return (
      <div className="teal-background">
        <Header width="100" open={isOpen} />
        <main className="d-flex">
          <RecipeList
            recipes={recipes}
            onClick={this.onRecipeClick}
            className="flex-3"
          />
          <RecipeDetail details={currentRecipe} className="flex-5" />
        </main>
        <BigButton onClick={this.onButtonClick} />
      </div>
    );
  }
}

export default App;
