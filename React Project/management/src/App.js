import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';

class App extends Component {
  render() {
    return (
      <div className="gray-background">
        <img src={logo} className="App-logo" alt="logo" />
          <h2>let's management</h2>
      </div>
    );
  }
}

export default App;
