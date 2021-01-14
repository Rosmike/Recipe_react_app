import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Recipe from "../Recipes/Recipe";

const UserApp = ({ handleLogout }) => {
  const APP_ID = "46d76bf8";
  const APP_KEY = "98fa2fba8efcb44596e321588974ccb0"; //.env

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [chosenRecipe, setChosenRecipe] = useState(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    ).then((e) => {
      setLoading(false);
      return e;
    });
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  useEffect(() => {}, [chosenRecipe]);

  return (
    <section className="userApp">
      <Navbar handleLogout={handleLogout} />

      <div>
        <div className="App">
          <form onSubmit={getSearch} className="search-form">
            <input
              className="search-bar"
              type="text"
              value={search}
              placeholder="Please type your ingredients"
              onChange={updateSearch}
            />
            <button className="search-button" type="submit">
              Search
            </button>
          </form>

          {loading ? (
            <div className="loader-wrapper">
              <div className="loader" />
            </div>
          ) : (
            <>
              {!chosenRecipe ? (
                <div className="recipes">
                  {recipes.map(
                    ({
                      recipe: { label, calories, image, ingredients, url },
                    }) => (
                      <Recipe
                        key={label}
                        title={label}
                        calories={calories}
                        image={image}
                        ingredients={ingredients}
                        setChosenRecipe={setChosenRecipe}
                        url={url}
                      />
                    )
                  )}
                </div>
              ) : (
                <div className="chosen-recipe__wrapper">
                  <div className="chosen-recipe">
                    <h1 className="chosen-recipe__title">
                      {chosenRecipe.title}
                    </h1>
                    <ol className="chosen-recipe__ol">
                      {chosenRecipe.ingredients.map((ingredient) => (
                        <li className="chosen-recipe__li" key={ingredient.text}>
                          {ingredient.text}
                        </li>
                      ))}
                    </ol>
                    <img
                      className="chosen-recipe__img"
                      src={chosenRecipe.image}
                      alt=""
                    />
                    <div className="recipe-buttons">
                      <div>
                        <i className="fas fa-plus-square recipe-plus" />
                      </div>
                      <div>
                        <i className="fas fa-minus-square recipe-minus" />
                      </div>
                    </div>
                    <a
                      className="chosen-recipe__button"
                      href={chosenRecipe.url}
                    >
                      Check recipe
                    </a>
                    <button
                      className="chosen-recipe__button"
                      onClick={() => setChosenRecipe(undefined)}
                    >
                      Return to all recipes
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default UserApp;
