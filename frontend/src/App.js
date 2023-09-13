import logo from './logo.svg';
import './App.css';
import { Nav } from './Pages/Nav';
import { AllRoute } from './AllRoute/AllRoute';
import { Footer } from './Pages/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <AllRoute/>
      
    </div>
  );
}

export default App;
