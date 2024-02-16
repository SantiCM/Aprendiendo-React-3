import { NavLink } from 'react-router-dom';


// Es exactamente igual que la navegacion inicial utilizando el navlink
// dandole su url 

function EventsNavigation() {
  
  return (
  
    <header className="header">
    
      <nav>
    
        <ul className="list">
    
          <li>
    
            <NavLink to="/events" className={({isActive}) => isActive ? "active" : undefined} end>All Events</NavLink>
    
          </li>
    
          <li>
    
            <NavLink to="/events/new" className={({isActive}) => isActive ? "active" : undefined}>New Event</NavLink>
    
          </li>
    
        </ul>
    
      </nav>
    
    </header>
  
  );

}

export default EventsNavigation;
