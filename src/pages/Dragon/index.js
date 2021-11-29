import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import './dragon.scss';

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
        <div class="content">
          <table class="rTable">
              <thead>
                 <tr>
                  <th>Id</th>
								  <th>Name</th>
                  <th>Created at</th>
								  <th>Type</th>
                </tr>
              </thead>
                <tbody>
                  <tr>
                    <td><strong>{dragon.id}</strong> </td>
                    <td><strong>{dragon.name}</strong> </td>
                    <td><strong>{dragon.createdAt}</strong> </td>
                    <td><img src={dragon.type} alt = "Imagem"/></td>
                  </tr>
                </tbody>
            </table>
      </div>
  </div>
  )
}
