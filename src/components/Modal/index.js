import './modal.css';
import { FiX } from 'react-icons/fi';

export default function Modal({close}){
  return(
    <div className="modal">
      <div className="container">
      <button className="close" onClick={ close }>
          <FiX size={23} color="#FFF" />
          Voltar
        </button>
        <div>
          <h2>Ação executada com sucesso</h2>
          <div className="row">
            <span>
              
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}