import './cadastro.scss';
import api from '../../services/api';
import { useState } from 'react';
import Button from '../../components/Button/button';
import Header from '../../components/Header';
import Modal from '../../components/Modal';

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

    function onSubmit() {
        api.post('api/v1/dragon', dragon);
        //setModal(true);
        alert("Registered successfully");
    }
    
    return(
        <div>
            <Header />
            <form onSubmit={onSubmit}>
                <h1>Registration of dragon</h1>
                <label>
                    Name of Dragon:<input name="name" required value={dragon.name} onChange={({ target }) => handleDragonInput(target)}/>
                </label>
                <label>
                   Image:<input name="type" required value={dragon.type} onChange={({ target }) => handleDragonInput(target)}/>
                </label>
                <Button name="Cadastrar"/>        
            </form>
            {modal && (<Modal/>
      )}
    </div>
    )
}

