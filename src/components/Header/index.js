
import './header.css';
import { Link } from 'react-router-dom';

export default function Header(){

  return(
    <header>
        <div class="header">
            <div class="header-right">
                <Link to="/home" className="menu">DRAGON LIST</Link>
                <Link to="/api/v1/dragon" className="menu">CREATE AN DRAGON</Link>
            </div>  
      </div>
    </header>
  )
}