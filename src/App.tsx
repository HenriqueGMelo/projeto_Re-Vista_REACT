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
// import useLocalStorage from 'react-use-localstorage';
import ShoppingCart from './paginas/ShoppingCart/ShoppingCart';


function App() {
  // const [dataUser] = useLocalStorage('user')
  // const userLogado = JSON.parse(dataUser);

  
//   useEffect(() => {
//     document.title = "[Re]Vista";
// }, [])

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
              {/* <Route path={`/produtos/id/empresas/${userLogado.id}`} element={<ListaProdutosDoador />} /> */}
              <Route path="/cadastrodoacao" element={<CadastroDoacao />} />
              <Route path="/dashboard" element={<DashboardDoador />} />
              <Route path='/cart' element={<ShoppingCart />} />
            </Routes>
          </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;