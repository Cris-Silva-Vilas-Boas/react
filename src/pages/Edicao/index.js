import './edicao.scss';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { useState , useEffect} from 'react';
import Button from '../../components/Button/button';
import Header from '../../components/Header';
import {useNavigate} from 'react-router-dom';

export default function Edicao(){

  const navigate = useNavigate();
  const { id } = useParams();
  const [olDragons, oldSetDragons] = useState([]);

  useEffect(()=>{
    async function loadDragons(){
        const response = await api.get(`api/v1/dragon/${id}`);
        oldSetDragons(response.data);
    }
    loadDragons();
  }, [id]);

  const [dragon, setDragon] = useState({
    name: "",
    type: "",
  });

 const handleDragonInput = ({ name, value }) => {
    setDragon((dragon) => {
    return {
        ...olDragons,
        [name]: value,
    };
    });
 };

 function onSubmit() {
    api.put(`api/v1/dragon/${id}`, dragon);
    alert('Successfully edited');
    navigate('/home');
 }

return(
    <div>
        <Header />
        <form onSubmit={onSubmit}>
            <h1>Edition of Dragon</h1>
            <label>
                Name of dragon:<input name="name" required defaultValue={olDragons.name} onChange={({ target }) => handleDragonInput(target)}/>
            </label>
            <label>
                Image:<input name="type" required defaultValue={olDragons.type} onChange={({ target }) => handleDragonInput(target)}/>
            </label>
                <Button name="Cadastrar"/>        
        </form>
    </div>
    )
}