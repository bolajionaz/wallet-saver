import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <Router className="App">
    <Nav />
    {/* Wrap Route elements in a Routes component */}
    <Routes>
      {/* Define routes using the Route component to render different page components at different paths */}
      {/* Define a default route that will render the Home component */}
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/search/stores" element={<ChooseStore />} />
      <Route path="/search/stores/aliExpress" element={<SearchOnlineStores searchOpt="aliExpress" />} />
      <Route path="/search/stores/amazon" element={<SearchOnlineStores searchOpt="amazon" />} />
      <Route path="/search/stores/compare" element={<SearchOnlineStores searchOpt="compare" /> } />
      <Route path='/about' element={<About/>}></Route>
      <Route path='/faq' element={<FAQs/>}></Route> */}
      {/* Define a route that will have descendant routes */}
      {/* <Route path="contact/*" element={<Contact />} /> */}
    </Routes>
    <Footer />
</Router>
  );
}

export default App;
