import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import './dragon.scss';
import {format, parseISO} from 'date-fns';
import TitlePage from '../../components/TitlePage';

export default function Dragon(){
    const { id } = useParams();
    const [dragon, setDragons] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(()=>{
    async function loadDragons(){
        const response = await api.get(`api/v1/dragon/${id}`);
        setDragons(response.data);
        setLoading(false);
    }
    loadDragons();
  }, [id]);

  if(loading){
    return(
        <div>
              <Loader name="carregando...."/>;  
        </div>
    )
  }
 
 function formatDate(date){
    const dateParse = parseISO(date, 'dd-MM-yyyy HH:mm:ss');
    return format(dateParse, 'dd-MM-yyyy');
 }

  return(
    <div>
      <Header />
      <TitlePage name = "Detalhes"/>
        <div id="containerDragon">
           <div className="lista-dragon-unit">
              <article>
                <strong>{dragon.name}</strong>
                <strong>{formatDate(dragon.createdAt)}</strong>
                <strong>{dragon.type}</strong>
              </article> 
           </div>
       </div>
  </div>
  )
}
