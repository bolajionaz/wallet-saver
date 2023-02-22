import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
         <Nav />
      <header className="App-header">
        <HomePage />
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
      <Footer />
    </div>
  );
}

export default App;
