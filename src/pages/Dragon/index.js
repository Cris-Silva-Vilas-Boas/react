import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import './dragon.scss';
import Button from '../../components/Button/button';
import { Link } from 'react-router-dom';

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
              <Loader name = "Loading..."/>;  
        </div>
    )
  }
  
  return(
    <div>
      <Header />
        <div id="container">
           <div className="lista-dragon">
              <article>
                <strong>{dragon.name}</strong>
                <strong>{dragon.createdAt} </strong>
                <img src={dragon.type} alt={dragon.name} /> 
              </article> 
           </div>
       </div>
  </div>
  )
}
