//#region import
  /* eslint-disable jsx-a11y/heading-has-content */
  import './App.css';
  import { BrowserRouter, Routes, Route, Link } from "react-router-dom" // instalation obligatoire => npm install react-router-dom@6
  import AuteurList from './components/appelApi/auteurs/auteursList';
//#endregion



//#region Application
  function App() {
    // state
      // const [inputNb , setInputNb] = useState("");

    //fonction

    return (
      <BrowserRouter>
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

