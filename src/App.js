import logo from '../src/assets/img/logo-rick-et-morty.png';
import './App.css';
import Card from './component/Card';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Card/>
      </header>
    </div>
  );
}

export default App;