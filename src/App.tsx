import React from 'react';
import './App.css';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Home   from './paginas/home/Home';
import Footer from './componentes/estaticos/footer/Footer';
import Login  from './paginas/login/Login';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CadastroUsuario from  './paginas/cadastrousuario/CadastroUsuario';
import Sobre from './paginas/sobre/Sobre';
import ListaProduto from './componentes/estaticos/produtos/listaproduto/ListaProduto';
import CadastroDoacao from './paginas/cadastrodoacao/CadastroDoacao';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <div style={{ minHeight: '100vh'}}>
            <Routes>
              <Route path="/" element={<Home />} />     
              <Route path="/login" element={<Login />} />    
              <Route path="/sobre" element={<Sobre />} />  
              <Route path="/home" element={<Home />} />
              <Route path="/cadastrousuario" element={<CadastroUsuario />} />
              <Route path="/produtos" element={<ListaProduto />} />   
              <Route path="/cadastrodoacao" element={<CadastroDoacao />} />
            </Routes>
          </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;