import { useState } from "react";
import Navbar from './components/Header/Navbar';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './pages/Create/Create';
import BlogDetails from './BlogDetails';
import NotFound from './pages/NotFound/NotFound';
import SearchBar from './components/Searchbar/SearchBar';
import SearchResults from './components/SearchResults/SearchResult';

function App() {
  const [results, setResults] = useState([]);
  return (
    <Router>
       <div className="App">
        {/* navbar shows on all pages (routes) because it is not inside the Routes component */}
          <Navbar />
          <SearchBar setResults={setResults} />
          <SearchResults results={results} />
          <div className="content">
              <Routes>
                 <Route path='/' element={ <Home/> } />
                 <Route path='/create' element={ <Create/> } />
                 <Route path='/blogs/:id' element={ <BlogDetails/> } />
                 <Route path='/*' element={ <NotFound /> } />
              </Routes>
          </div>
       </div>
    </Router>
  );
}

export default App;
