import logo from '../src/assets/img/logo-rick-et-morty.png';
import './App.css';
import Card from './component/card';


const url = "https://rickandmortyapi.com/api/character?page=2"




const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Ici, vous devriez faire une requête à votre API pour récupérer les images
    // et ensuite mettre à jour l'état "images" avec les données de l'API
  }, []); // Assurez-vous de mettre les dépendances appropriées pour le useEffect

  return (
    <div className="app">
      {images.map((image, index) => (
        <Card key={index} image={image} />
      ))}
    </div>
  );
}

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
      </header>
    </div>
  );
}

export default App;




useEffect(() => {
  fetch('https://rickandmortyapi.com/api/character?page=2')
    .then(response => response.json())
    .then(data => setImages(data))
    .catch(error => console.error('Erreur:', error));
}, []);


