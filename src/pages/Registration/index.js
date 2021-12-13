import './registration.scss';
import api from '../../services/api';
import { useState } from 'react';
import Button from '../../components/Button/button';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import Title from '../../components/Title';
import { useNavigate } from 'react-router';

export default function Registration(){

    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const [dragon, setDragon] = useState({
        name: "",
        type: "",
      });
    
    const handleDragonInput = ({ name, value }) => {
        setDragon((dragon) => {
            return {
                ...dragon,
                [name]: value,
            };
        });
    };

    function onSubmit(e) {
        api.post('api/v1/dragon', dragon);
        e.preventDefault();
        setModal(true);
    }

    function togglePostModal(){
        setModal(!modal);
        navigate('/home');
    }

    return(
        <div>
            <Header/>          
              <form class="formcadastro" onSubmit={onSubmit}>
                  <Title name ="Cadastrar Dragão"/>
                  <div class="div-cadastro">
                      <input type="text" class="inputcadastro" name="name" placeholder="Informe um nome" required value={dragon.name} onChange={({ target }) => handleDragonInput(target)} />
                  </div>
                  <div class="div-cadastro">
                      <input type="text" class="inputcadastro" name="type" placeholder="Informe o tipo" required value={dragon.type} onChange={({ target }) => handleDragonInput(target)} />
                  </div>
                  <Button name="Cadastrar"/> 
              </form>
            {modal && (<Modal close={togglePostModal}/>
        )}
      </div>
    )
}

