import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Heading = styled.header`
  transition: margin 0.5s ease-in-out;
  display: flex;
  justify-content: space-around;
`;

const NavWrapper = styled.nav`
  display: flex;
  margin-left: ${props => (props.isOpen ? '200px' : 'none')};
  transition: margin 0.3s ease-in-out;
`;

const Link = styled(NavLink)`
  padding: 20px 40px;
  background-color: white;
  transition: background-color 0.4s ease-in-out;
  border-radius: 5px;

  &:hover {
    background-color: inherit;
    transition: background-color 0.4s ease-in-out;
    opacity: 0.7;
  }
`;

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true
    };
  }

  toggleOpen = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <Heading>
        <h1 onClick={this.toggleOpen}>My Recipes App</h1>
        <NavWrapper isOpen={this.state.isOpen}>
          <Link to="/" className="m-auto black-text" activeClassName="">
            Home
          </Link>
          <Link
            to="/favorites"
            className="m-auto black-text"
            activeClassName=""
          >
            Favorites
          </Link>
        </NavWrapper>
      </Heading>
    );
  }
}

export default Header;
