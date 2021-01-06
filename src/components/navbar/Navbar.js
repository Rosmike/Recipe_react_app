import React, { Component } from "react";
import MenuItems from "./MenuItems";
import './Navbar.css'
import {Button} from "../Button";
import LoginApp from "../../Login/LoginApp";
import { Route, BrowserRouter as Router, Redirect, NavLink as Link } from "react-router-dom";


class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    Fridger
                    <i className="fas fa-utensils" />
                </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}/>

                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}

                </ul>
                <Link to="/signup">Sign up</Link>
            </nav>
        )
    }
}

export default Navbar