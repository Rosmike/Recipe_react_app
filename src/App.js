import React, {useEffect, useState} from "react";
import Recipe from "./Recipe";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";


const App = () => {
    const APP_ID = "46d76bf8";
    const APP_KEY = "98fa2fba8efcb44596e321588974ccb0";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('chicken');

    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch
        (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        console.log(data.hits);
        setRecipes(data.hits);
    };

    const updateSearch = e => {
        setSearch(e.target.value);
        console.log(search)
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }


    return (

        <div className="App">
            <Navbar/>
            <form onSubmit={getSearch} className="search-form">
                <input
                    className="search-bar"
                    type="text"
                    value={search}
                    onChange={updateSearch}
                />
                <button className="search-button" type="submit">
                    Search
                </button>
            </form>
            <div className="recipes">
                {recipes.map(({recipe: { label, calories, image, ingredients }}) =>(
                    <Recipe
                    key={label}
                    title={label}
                    calories={calories}
                    image={image}
                    ingredients={ingredients}

                    />
                    ))}
            </div>
        </div>
    );
}

export default App