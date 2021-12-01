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
        <div class="login-box">
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <div class="user-box">
                <input id="email" type="email" required onChange={({ target }) => handleUserInput(target)}/>
                <label>Email</label>
                </div>
                <div class="user-box">
                <input id="senha" type="password" required onChange={({ target }) => handleUserInput(target)}/>
                <label>Password</label>
                </div>
                <Button name="Enter"/>  
            </form>
            </div>       
    )
}