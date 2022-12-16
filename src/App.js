import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import AfficherRecettes from "./pages/AfficherRecettes";
import DetailRecette from "./pages/DetailRecette";
import CategoryRecettes from "./pages/CategoryRecettes";

import "./styles/style.css";



function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/recettes" element={<AfficherRecettes/>} />
          <Route path="/recettes/:nom" element={<AfficherRecettes/>} />
          <Route path="/recettes/c/:category" element={<AfficherRecettes/>} />
          <Route path="/detail/:id" element={<DetailRecette/>} />
          <Route path="/categories" element={<CategoryRecettes/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
