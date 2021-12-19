import './button.css';

export default function Button(props){
   return(
      <button className = "button button-green">{props.name}</button>
   )
}