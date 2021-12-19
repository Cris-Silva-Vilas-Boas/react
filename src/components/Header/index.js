
import './header.scss';
import { Link } from 'react-router-dom';

export default function Header(){

  return(
    <header>
        <div class="header">
            <div class="header-right">
                <Link to="/home" className="menu">Início</Link>
                <Link to="/api/v1/dragon" className="menu">Criar novo</Link>
            </div>  
      </div>
    </header>
  )
}