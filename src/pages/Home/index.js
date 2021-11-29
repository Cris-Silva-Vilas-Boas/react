import { useEffect, useState} from 'react';
import './home.scss';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import {BiTrash, BiPencil, BiPlus} from 'react-icons/bi';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';

export default function Home() {
  const [dragons, setDragons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    async function loadDragons(){
        const response = await api.get('api/v1/dragon')
        setDragons(response.data);
        setLoading(false);
    }
    loadDragons();
  }, []);

  if(loading){
    return(
        <div>
              <Loader name = "Loading..."/>;  
        </div>
    )
  }

 
  dragons.sort(function(a,b){
      if (a.name<b.name) {
        return -1;
      }
      if (a.name>b.name) {
        return 1;
      }
      return 0;
    })
  

  return (
    <div>
      <Header />
        {dragons.map((dragon)=>{
      
          function onClick() {
            api.delete(`api/v1/dragon/${dragon.id}`);
            alert('Successfully deleted');
            window.location.reload();
          } 
  return(
    <div class="content">
      <table class="rTable">
          <thead>
            <tr>
              <td><strong>Name</strong></td>
              <td><strong>Actions</strong></td>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td><strong>{dragon.name}</strong> </td>
                <td>
                  <Link input onClick={onClick} to={'/home'}><BiTrash size={25}/></Link>
                  <Link to={`/dragon/${dragon.id}`}><BiPlus size={25} /></Link>
                  <Link to={`/edit/dragon/${dragon.id}`}><BiPencil size={25}/></Link>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
        )
      })}
      <Footer />
  </div>
  )
}