import './error.css';
import { Link } from 'react-router-dom';

export default function Error(){
    return(
        <div class = "notfound">
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <Link to='/home'>Veja todos os cadastros</Link>
        </div>
    )
}