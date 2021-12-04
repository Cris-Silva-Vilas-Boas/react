import './cadastro.scss';
import api from '../../services/api';
import { useState } from 'react';
import Button from '../../components/Button/button';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import Title from '../../components/Title';

export default function Registration(){
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
        setModal(!modal)
      }

    return(
        <div>
            <Header/>          
              <form onSubmit={onSubmit}>
                  <Title name ="Cadastrar Dragão"/>
                  <div class="single-input">
                      <input type="text" class="input" name="name" required value={dragon.name} onChange={({ target }) => handleDragonInput(target)} />
                      <label for="nome">nome</label>
                  </div>
                  <div class="single-input">
                      <input type="text" class="input" name="type" required value={dragon.type} onChange={({ target }) => handleDragonInput(target)} />
                      <label for="tipo">tipo</label>
                  </div>
                  <Button name="Cadastrar"/> 
              </form>
            {modal && (<Modal
              close={togglePostModal}
            />
      )}
    </div>
    )
}

