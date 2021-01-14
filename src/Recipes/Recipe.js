import React from "react";
import "./recipe.css";

const Recipe = ({
  title,
  calories,
  image,
  ingredients,
  setChosenRecipe,
  url,
}) => {
  const handleRecipeClick = () => {
    console.log("witam");
    setChosenRecipe({
      key: title,
      title: title,
      calories: calories,
      image: image,
      ingredients: ingredients,
      url: url,
    });
  };

  return (
    <div className="recipe" onClick={handleRecipeClick}>
      <h1 className="recipeTitle">{title}</h1>
      <img className="image" src={image} alt="" />
    </div>
  );
};

export default Recipe;
