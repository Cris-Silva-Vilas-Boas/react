import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Dragon from '../pages/Dragon';
import Cadastro from '../pages/Cadastro';
import Edicao from '../pages/Edicao';
import Login  from '../pages/Login';
import Error from '../pages/Error';

const Rotas = () => {

  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/dragon/:id" element={<Dragon />}></Route>
          <Route path="/api/v1/dragon" element={<Cadastro />}></Route>
          <Route path="/edit/dragon/:id" element={<Edicao />}></Route>
          <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Rotas;