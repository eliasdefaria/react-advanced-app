import React from 'react';
import logo from '../logo.svg';
import randomImage from '../static/images/download.jpg';
import Header from './Header.js';
import RecipeList from './RecipeList.js';
import RecipeDetail from './RecipeDetail.js';
import './App.css';

fetch(`${process.env.REACT_APP_API_URL}/v1/recipes`)
.then(res => res.json())
.then(json => console.log(json))

const App = () => {
  return(
    <div>
      <Header />
      <main className="d-flex">
        <RecipeList className="flex-3"/>
        <RecipeDetail className="flex-5" />
      </main>

    </div>
  )
}

export default App;
