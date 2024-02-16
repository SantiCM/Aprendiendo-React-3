import "./CoreConcep.css"

// mandamos una variable que recibe la image, title y description
export const CoreConcep = ({ image, title, description }) => {
  
  // retorna ul li 
  // que recibe una imagen
  // el title
  // descrption
  return (

    <ul>
  
      <li>
    
        <img src={image} alt={title}></img>

        <h3>{title}</h3>

        <p>{description}</p>
    
      </li>

    </ul>
  
  );

};