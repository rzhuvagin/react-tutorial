import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { About } from './About';
import { Login } from './Login';
import { Main } from './Main';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li>
              <NavLink to="/">Main</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Main/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/about" element={<About/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
