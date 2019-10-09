import React from 'react';

import './App.css';

import logo from './assets/logo.svg';

//importa o arquivo routes.js
import Routes from './routes';

//Pelas rotas lá adicionadas carrega a page relacionada
function App() {
  return (
    <div className="container">
      <img src={ logo } alt="AirCnC"/>
      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
