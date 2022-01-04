import './App.css';
import { Navbar } from './Navbar/Navbar';
import { AboutPage } from './AboutPage/AboutPage';

function App() {
  return (
    <div className="App">
      <Navbar className='Navbar'/>
      <AboutPage className='AboutPage'/>
    </div>
  );
}

export default App;
