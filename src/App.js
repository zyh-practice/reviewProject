import logo from './logo.svg';
import './App.css';
import Mycompents from './01.函数式组件/Mycompents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Mycompents />
      </header>
    </div>
  );
}

export default App;
