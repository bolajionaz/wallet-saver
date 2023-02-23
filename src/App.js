import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer';
import Nav from './components/Nav';

import HomePage from './pages/HomePage';
import ChooseStore from './pages/StoreChoice';

function App() {
  return (
    <div  className='App'>
      <Router>
      <Nav />
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/stores" element={<ChooseStore />} />
        {/* 
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
</div>
  );
}

export default App;
