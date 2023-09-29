import logo from '../src/assets/img/logo-rick-et-morty.png';
import './App.css';
import Card from './component/Card';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='desc'>
          Rick et Morty : apprentissage de react sans prise de tête
        </p>
        <div className='square'>
          <img src='./'/>
        </div>
        <Card/>
      </header>
    </div>
  );
}

export default App;