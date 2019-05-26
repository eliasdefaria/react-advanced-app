import React from 'react';

const RecipeList = (props) => {
  return(
    <div className={props.className}>
      <h2>Recipes</h2>
        <ul>
          <li>
            <span>Creepy Halloween Skull Cupcakes</span>
            <span>Dessert</span>
          </li>
          <li>
            <span>Blueberry Sour Cream Coffee Cake</span>
            <span>Dessert</span>
          </li>
          <li>
            <span>Blueberry Cream Pie</span>
            <span>Dessert</span>
          </li>
          <li>
          <span>Chicken Pot Pie</span>
          <span>Meat</span>
          </li>
        </ul>
    </div>
  )
}

export default RecipeList;
