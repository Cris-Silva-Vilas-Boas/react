import './modal.css';
import { FiX } from 'react-icons/fi';

export default function Modal({close}, props){
  return(
    <div className="modal">
      <div className="container">
      <button className="close" onClick={close}>
          <FiX size={23} color="#FFF" />
          Voltar
        </button>
        <div>
          <h2>{props.name}</h2>
        </div>
      </div>
    </div>
  )
}