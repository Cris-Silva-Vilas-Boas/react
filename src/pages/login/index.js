import './login.scss';
import { useState } from 'react';
import Button from '../../components/Button/button';
import {useNavigate} from 'react-router-dom';
import Title from '../../components/Title';
import TitlePage from '../../components/TitlePage';

export default function Login(){
    
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
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
        <form class="formlogin" onSubmit={onSubmit}>
            <TitlePage name = "Login"/>
            <Title name = "Login"/>
                <div class="div-input">
                    <input type="text" class="inputlogin"  placeholder="email@email.com" name="name" required onChange={({ target }) => handleUserInput(target)} />
                </div>
                <div class="div-input">
                    <input type="password" class="inputlogin" placeholder="**********"  required onChange={({ target }) => handleUserInput(target)} />
                </div>
            <Button name="Entrar"/> 
        </form>          
    )
}