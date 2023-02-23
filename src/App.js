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
      </header>
      <Footer />
    </div>
  );
}

export default App;
