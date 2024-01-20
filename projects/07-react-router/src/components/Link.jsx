import { EVENT } from "../../const";

export function navigate(href) {
  
  // permite cambiar la url
  // pero que no refresque la pagina (pushState)
  // href, url que queremos ir
  window.history.pushState({}, "", href);

  // crear un nuevo eventooo
  const navigationEvent = new Event(EVENT.PUSHSTATE);

  // enviar el evento
  window.dispatchEvent(navigationEvent);

}

export function Link({target, to, ...props}) {

  const handleClick = (ev) => {
    
    ev.preventDefault()

    navigate(to)

  } 

  return (
    
    <a onClick={handleClick} href={to} target={target} {...props}></a>  
    
  )

}