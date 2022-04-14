//#region import
  /* eslint-disable jsx-a11y/heading-has-content */
  import './App.css';
  import { BrowserRouter, Routes, Route, Link } from "react-router-dom" // instalation obligatoire => npm install react-router-dom@6
  import AuteurList from './components/appelApi/auteurs/auteursList';

  import Container from 'react-bootstrap/Container';
//#endregion



//#region Application
  function App() {
    // state
      // const [inputNb , setInputNb] = useState("");

    //fonction

    return (
      <BrowserRouter>
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </header>
        <div>
          <nav className='header'>
              <div>
                <h3>bibliotheque</h3>
                <Link to="/">Home</Link>
                <Link to="/auteurs">Auteur</Link>
              </div>
          </nav>
          <Routes>
            <Route path="/auteurs" element={<AuteurList />}></Route>
            <Route path="/" element={<p>page d'acceuil</p>}></Route>
          </Routes>
        </div>
        
        
      </BrowserRouter>
    );
  }

  export default App;
//#endregion

