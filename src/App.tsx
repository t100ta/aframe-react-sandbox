import * as React from 'react';
// import Hogecontainer from '../src/containers/hogeContainer'
import Aframecontainer from '../src/containers/aframeReactContainer'
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Aframecontainer />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hogecontainer />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
    )
  }
}

export default App;
