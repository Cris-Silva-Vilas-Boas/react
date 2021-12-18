import { useEffect, useState} from 'react';
import './home.scss';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import {BiTrash, BiPencil, BiPlus} from 'react-icons/bi';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';
import Modal from '../../components/Modal';
import TitlePage from '../../components/TitlePage';

export default function Home() {
  
  const [dragons, setDragons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);

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
        <Loader name="carregando..."/>;  
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
  
  function togglePostModal(){
      setModal(!modal);
      window.location.reload();
  }

  return (
    <div>
      <Header />
      <TitlePage name = "Home"/>
        {dragons.map((dragon)=>{

          function onClick() {
              api.delete(`api/v1/dragon/${dragon.id}`);
              setModal(true);
          } 
            return(
              <div id="container">
              <div class="lista-dragon">
                    <article>
                        <strong>{dragon.name} </strong>
                        <Link onClick={onClick} to={'/home'}><BiTrash size={25}/></Link>
                        <Link to={`/dragon/${dragon.id}`}><BiPlus size={25} /></Link>
                        <Link to={`/edit/dragon/${dragon.id}`}><BiPencil size={25}/></Link>
                    </article>
              </div>
            </div>
          )
      })}
       {modal && (<Modal close={togglePostModal} name = "Dragão removido com sucesso"/>)}
      <Footer />
  </div>
  )
}