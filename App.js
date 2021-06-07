import logo from './logo.svg';
import './App.css';
import './components/overview';
//import Square from './components/overview';
import Game from './components/overview';

/*function App() {
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
      </header>
    </div>
  );
}
*/
function App(){

  return(
    <div className="App">
      <Game />

    </div>

  );
}

export default App;
