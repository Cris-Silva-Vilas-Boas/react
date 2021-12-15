
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Dragon from './pages/Dragon';
import Cadastro from './pages/Cadastro';
import Edicao from './pages/Edicao';
import Login  from './pages/Login';

const Rotas = () => {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/dragon/:id" element={<Dragon />}></Route>
          <Route path="/api/v1/dragon" element={<Cadastro />}></Route>
          <Route path="/edit/dragon/:id" element={<Edicao />}></Route>
          <Route path="/" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas;