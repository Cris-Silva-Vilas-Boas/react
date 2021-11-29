import './login.scss';
import { useState } from 'react';
import Button from '../../components/Button/button';
import {useNavigate} from 'react-router-dom';

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
            <h1>
                <label>
                Email:<input id="email" type="email" required onChange={({ target }) => handleUserInput(target)}/>
                </label>
                <label>
                    Password: <input id="senha" type="password" required onChange={({ target }) => handleUserInput(target)}/>
                </label>
                <Button name="Enter"/>   
            </h1>
        </form>
    )
}