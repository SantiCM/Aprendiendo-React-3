import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import {useRouter} from "next/router"


function MeetupItem(props) {

  // damos el router de next
  const router = useRouter()

  const showDetailsHandler = () => {

    // empuja una nueva pagina a la pila de paginas y es el equivalente
    // a usar el componente de enlace si no desea un enlace
    router.push("/" + props.id)
  
  }
  
  return (
    
    <li className={classes.item}>
  
      <Card>
  
        <div className={classes.image}>
  
          <img src={props.image} alt={props.title} />
  
        </div>
  
        <div className={classes.content}>
  
          <h3>{props.title}</h3>
  
          <address>{props.address}</address>
  
        </div>
  
        <div className={classes.actions}>
  
          <button onClick={showDetailsHandler}>Show Details</button>
  
        </div>
  
      </Card>
  
    </li>
  
  );

}

export default MeetupItem;
