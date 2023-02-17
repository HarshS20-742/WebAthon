import logo from './logo.svg';
import './App.css';
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import NavBar from './Components/NavBar';
import HomeScreen from './Screens/HomeScreen';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeScreen />
    </div>
  );
}

export default App;
