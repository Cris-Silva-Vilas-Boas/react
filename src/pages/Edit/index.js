import './edit.scss';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { useState , useEffect} from 'react';
import Button from '../../components/Button/button';
import Header from '../../components/Header';
import {useNavigate} from 'react-router-dom';
import Title from '../../components/Title';
import Modal from '../../components/Modal';
import TitlePage from '../../components/TitlePage';

export default function Edit(){
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
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

  function onSubmit(e) {
    api.put(`api/v1/dragon/${id}`, dragon);
    e.preventDefault();
    setModal(true);
 }

 const handleDragonInput = ({ name, value }) => {
    setDragon(() => {
        return {
            ...olDragons,
            [name]: value,
        };
    });
 };

 function togglePostModal(){
    setModal(!modal);
    navigate('/home');
 }

return(
    <div>
        <Header />
        <TitlePage name ="Edição"/>
        <form class = "formedit" onSubmit={onSubmit}>
                  <Title name ="Editar Dragão"/>
                  <div class="divedit">
                      <input type="text" class="inputedit" name="name" required defaultValue={olDragons.name} onChange={({ target }) => handleDragonInput(target)} />
                  </div>
                  <div class="divedit">
                      <input type="text" class="inputedit" name="type" required defaultValue={olDragons.type} onChange={({ target }) => handleDragonInput(target)} />
                  </div>
                  <Button name="Salvar"/> 
        </form>
        {modal && (<Modal close={togglePostModal} name ="Dragão editado com sucesso"/>)}
    </div>
    )
}