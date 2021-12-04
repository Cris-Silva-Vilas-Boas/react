import './login.scss';
import { useState } from 'react';
import Button from '../../components/Button/button';
import {useNavigate} from 'react-router-dom';
import Title from '../../components/Title';

export default function Login(){
    
    const navigate = useNavigate();

    const [user, setUser] = useState({
        nameUser: "",
        password: "",
    });

   
    const handleUserInput = ({ name, value }) => {
        setUser((user) => {
        return {
            ...user,
            [name]: value,
        };
        });
    };

    function onSubmit() {
        navigate('/home');
    }
    

    return(
        <form onSubmit={onSubmit}>
            <Title name = "Login"/>
                <div class="single-input">
                    <input type="text" class="input" name="name" required onChange={({ target }) => handleUserInput(target)} />
                    <label for="email">email</label>
                </div>
                <div class="single-input">
                    <input type="text" class="input" required onChange={({ target }) => handleUserInput(target)} />
                    <label for="senha">senha</label>
                </div>
            <Button name="Entrar"/> 
        </form>          
    )
}