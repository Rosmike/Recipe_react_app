import React from "react";

const UserApp = ({handleLogout}) => {

    return (
        <section className="userApp">
            <nav>
                <h2>Welcome to Fridger<i className="fas fa-utensils" /></h2>
                <button className="loginButton" onClick={handleLogout}>Logout</button>
            </nav>

        </section>
    )
}

export default UserApp;