import React from 'react';
import './App.css';
import UserGreetin from './User.greetin';

function App() {
    return (
        <div>
            <UserGreetin isLoggedIn={false} username="I love my Mom" />
        </div>
    );
}

export default App;
