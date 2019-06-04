import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Favorites from './Favorites';
import Header from './Header';
import Recipe from './Recipe';
import NotFound from './NotFound';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      favorites: []
    };
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URL}/v1/recipes`)
      .then(res => res.json())
      .then(recipes => this.setState({ recipes }));
  }

  toggleFavorite = id => {
    this.setState(prevState => {
      const idx = prevState.favorites.includes(id);
      const newFavorites = prevState.favorites;

      if (idx) {
        newFavorites.splice(newFavorites.findIndex(e => e.id === id), 1);
        return { favorites: newFavorites };
      }

      newFavorites.push(id);
      return { favorites: newFavorites };
    });
  };

  render() {
    return (
      <BrowserRouter>
        <main>
          <Header width="100" />
          <Switch>
            <Redirect from="/home" to="/" />
            <Route
              exact
              path="/"
              render={() => (
                <Home state={this.state} toggleFavorite={this.toggleFavorite} />
              )}
            />
            <Route
              path="/favorites"
              render={() => (
                <Favorites
                  state={this.state}
                  toggleFavorite={this.toggleFavorite}
                />
              )}
            />
            <Route path="/recipe/:id" component={Recipe} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
