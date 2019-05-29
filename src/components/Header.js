import React from 'react';
import styled from 'styled-components';

const Heading = styled.header`
  padding: 40px;
  margin-left: 2rem;
  margin-left: ${props => (props.open ? `${props.width * 2}px` : 'none')}
  transition: margin 0.5s ease-in-out;
`;

const Header = props => {
  return (
    <Heading {...props}>
      <h1>My Recipes App</h1>
    </Heading>
  );
};

export default Header;
