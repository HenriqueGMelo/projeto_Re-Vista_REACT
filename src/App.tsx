import React, { useEffect } from 'react';
import './App.css';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Home   from './paginas/home/Home';
import Footer from './componentes/estaticos/footer/Footer';
import Login  from './paginas/login/Login';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CadastroUsuario from  './paginas/cadastrousuario/CadastroUsuario';
import Sobre from './paginas/sobre/Sobre';
import ListaProduto from './componentes/estaticos/produtos/listaproduto/ListaProduto';
import ListaProdutosDoador from './componentes/estaticos/produtos/listaproduto/ListaProdutosDoador';
import CadastroDoacao from './paginas/cadastrodoacao/CadastroDoacao';
import DashboardDoador from './paginas/dashboard/Dashboard';
import ShoppingCart from './paginas/ShoppingCart/ShoppingCart';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { CartProvider } from './hooks/useCart';
import ListaProdutosONG from './componentes/estaticos/produtos/listaproduto/ListaProdutoONG';
import MinhaConta from './paginas/minhapagina/minhaConta';

function App() {

  return (
    <>
      <Router>
      <ToastContainer />
      <CartProvider>
        <Navbar />
          <div style={{ minHeight: '100vh'}}>
            <Routes>
              <Route path="/" element={<Home />} />     
              <Route path="/login" element={<Login />} />    
              <Route path="/sobre" element={<Sobre />} />  
              <Route path="/home" element={<Home />} />
              <Route path="/cadastrousuario" element={<CadastroUsuario />} />
              <Route path="/produtos" element={<ListaProduto />} />  
              <Route path="/produtos/id/empresas/:id" element={<ListaProdutosDoador />} /> 
              <Route path="/cadastrodoacao" element={<CadastroDoacao />} />
              <Route path="/dashboard" element={<DashboardDoador />} />
              <Route path='/cart' element={<ShoppingCart />} />
              <Route path='/produtos-ong' element={<ListaProdutosONG />} />
              <Route path="/minhaconta" element={<MinhaConta />} />
            </Routes>
          </div>
          </CartProvider>
        <Footer />
      </Router>
    </>
  );
}

export default App;