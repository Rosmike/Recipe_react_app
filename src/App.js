import React, {useEffect, useState} from "react";
import Recipe from "./Recipe";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import {Route, BrowserRouter as Router, Redirect, Link, Switch} from "react-router-dom"

import "firebase/analytics";

import "firebase/auth";
import "firebase/firestore";
import LoginApp from "./Login/LoginApp";


const App = () => {
    const APP_ID = "46d76bf8";
    const APP_KEY = "98fa2fba8efcb44596e321588974ccb0";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('');

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
        <Router>

            <Switch>
                <Route exact path="/">
                    <Navbar/>
                    <div className="App">

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
                            {recipes.map(({recipe: {label, calories, image, ingredients}}) => (
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
                </Route>
                <Route exact path="/signup" component={LoginApp}/>
            </Switch>
        </Router>
    );
}

export default App