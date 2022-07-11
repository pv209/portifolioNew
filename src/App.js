import React, { Component } from 'react';
import { Route,Routes } from 'react-router';
import TelaPrincipal from './Pages/TelaPrincipal';




class App extends Component {
  render() {
    return (
        <Routes>
          <Route path="/" exact element={ <TelaPrincipal/> } />
        </Routes>

 
    );
  }
}

export default App;