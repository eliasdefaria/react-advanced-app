import React from 'react';

const RecipeDetail = (props) => {
  if(!props.details){
    return(
      <p>
        Please select a recipe to see the details...
      </p>
    )
  }
  else{
    return(
      <div className={props.className}>
        <h1>{ props.details.name }</h1>
        <h2>Category: { props.details.category }</h2>
        <img src={ props.details.image }></img>
      </div>
    )
  }

}

export default RecipeDetail;
