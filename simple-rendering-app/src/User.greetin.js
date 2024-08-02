import React from "react";

function UserGreetin({ isLoggedIn, username }) {
    if (isLoggedIn) {
        return <h1>Welcome, {username}!</h1>;
    } else {
        return <h1>Welcome, Guest!</h1>;
    }
}

export default UserGreetin;
