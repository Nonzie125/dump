import React from 'react';
import './App.css';
import UserGreetin from './User.greetin';
// src/App.js
import UserGreeting from "./simple-rendering-app/UserGreeting";

function App() {
    return (
        <div>
            <UserGreeting isLoggedIn={true} username="AmaliNjoki" />
        </div>
    );
}

export default App;
