import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className="my-app">
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
              <a class="navbar-item" href="https://devahoy.com">
                <img src="https://devahoy.com/assets/images/devahoy-text-logo.png" alt="DEVAHOY LOGO" width="112" height="28" />
              </a>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item" href="#">Home</a>
                <a className="navbar-item" href="#">Posts</a>
                <a className="navbar-item" href="#">Projects</a>
                <a className="navbar-item" href="#">About</a>
                <a class="navbar-item" href="https://github.com/phonbopit" target="_blank">Star on <i className="fab fa-github"></i></a>
              </div>
            </div>
          </div>
        </nav>

        <div className="container">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    )
  }
}

export default App
