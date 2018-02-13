import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Routing from './routes'

class App extends Component {
  render() {
    return (
      <div className="my-app">
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="https://devahoy.com">
                <img src="https://devahoy.com/assets/images/devahoy-text-logo.png" alt="DEVAHOY LOGO" width="112" height="28" />
              </a>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <NavLink to="/" className="navbar-item" href="#">Home</NavLink>
                <NavLink to="/posts" className="navbar-item" href="#">Posts</NavLink>
                <NavLink to="/projects" className="navbar-item" href="#">Projects</NavLink>
                <NavLink to="/about" className="navbar-item" href="#">About</NavLink>
                <a class="navbar-item" href="https://github.com/phonbopit" target="_blank">Star on <i className="fab fa-github"></i></a>
              </div>
            </div>
          </div>
        </nav>

        <div className="container">
          <Routing />
        </div>
      </div>
    )
  }
}

export default App
