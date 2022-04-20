//#region import
  /* eslint-disable jsx-a11y/heading-has-content */
  import './App.css';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import {Card} from 'react-bootstrap';
  import { BrowserRouter, Routes, Route, Link } from "react-router-dom" // instalation obligatoire => npm install react-router-dom@6
  import AuteurList from './components/appelApi/auteurs/auteursList';
  import ClientList from './components/appelApi/clients/clientList';
  import AjoutAuteur from './components/appelApi/auteurs/addAuteur';
  import Home from './components/vue/home';

//#endregion



//#region Application
  function App() {
    // state
      // const [inputNb , setInputNb] = useState("");

    //fonction

    return (
      <BrowserRouter>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Acceuil</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="livres">Liste des livres</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="auteurs">Liste des auteurs</Link>
                </li> */}
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Ajout
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/">Livre</Link></li>
                    <li><Link className="dropdown-item" to="/">Emprunt</Link></li>
                    <li><Link className="dropdown-item" to="ajoutAuteur">Auteur</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Listes
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/">Livres</Link></li>
                    <li><Link className="dropdown-item" to="/">Emprunt</Link></li>
                    <li><Link className="dropdown-item" to="/auteurs">Auteurs</Link></li>
                    <li><Link className="dropdown-item" to="/clients">clients</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </header>
          <Routes>
            <Route path="/auteurs" element={<AuteurList />}></Route>
            <Route path="/clients" element={<ClientList />}></Route>
            <Route path="/ajoutAuteur" element={<AjoutAuteur />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
          <Card className="text-center">
            <Card.Body className='bg-dark'>
              <Card.Text className="text-muted">
                ici je rajoute mon contenus
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted  bg-dark">© Web-App 2022</Card.Footer>
          </Card>
      </BrowserRouter>
      
    );
  }
  export default App;
//#endregion

