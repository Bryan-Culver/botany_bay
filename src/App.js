import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcomeScreen';

class  App extends Component {

  constructor(props) {
    super(props);
    this.state = {showWelcome: true};
    this.toggleWelcome = this.toggleWelcome.bind(this);
  }

  toggleWelcome() {
    this.setState({
      showWelcome: !this.state.showWelcome,
    });
  }

  render() {
    return (
        <div className="App-header">
          <header className="App">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
              Edit <code>src/App.js</code> and refresh
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <body>
          <h1>Simple Welcome Example in React Application</h1>
          <button onClick={this.toggleWelcome.bind(this)}> click to launch welcome screen</button>
          {this.state.showWelcome ?
              <Welcome
                  text='Click "OK" to hide welcome screen'
                  closeWelcomeScreen={this.toggleWelcome.bind(this)}
              />
              : null
          }
          </body>
        </div>
    );
  }
}

export default App;
