import './App.css';
import logo from './logo.png';
import { Navbar } from './Navbar';
import { AboutPage } from './AboutPage';

function App() {
  return (
    <div className="App">
      <Navbar className='Navbar'/>
      <AboutPage className='AboutPage'/>
    </div>
  );
}

export default App;
