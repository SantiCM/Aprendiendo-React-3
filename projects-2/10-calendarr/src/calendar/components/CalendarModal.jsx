import { addHours, differenceInSeconds } from "date-fns";
import { useEffect, useMemo, useState } from "react";
import Modal from "react-modal";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { es } from "date-fns/locale";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { useUiStore } from "../../hooks/useUiStore";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { getEnvVariables } from "../../helpers/getEnvVariables";


// Hacemos el calendarModal de terceros componentes

// hacemos que el idioma cambie a español
registerLocale("es", es);

// estilos
const customStyles = {
  
  content: {
  
    top: "50%",

    left: "50%",

    right: "auto",

    bottom: "auto",

    marginRight: "-50%",

    transform: "translate(-50%, -50%)",
  
  },

};

/*


if(getEnvVariables().VITE_MODE !== "test") {

  Modal.setAppElement("#root");

}

*/ 


// si las variables son iguales al mode del test pasa
if(getEnvVariables().VITE_MODE) 

// Modal del #root (evitar el error)
Modal.setAppElement("#root");

export const CalendarModal = () => {

  // llamos el isDateModalOpen, closeDateMoral que viene de useUiStore
  const { isDateModalOpen, closeDateMoral } = useUiStore();

  // lamamos el activeEvent, startSavingEvent que viene de useCalendarStore
  const {activeEvent, startSavingEvent} = useCalendarStore()

  //hacemos un useState del form 
  const [formSubmitted, setFormSubmitted] = useState(false);

  // otro useForm de los valores  que tiene el titulo, las notas, el inicio y el fina
  const [formValues, setformValues] = useState({

    title: "Santiago",

    notes: "Melo",

    // inicia con una nueva hora
    start: new Date(),

    // acaba despues de 2 horas por defecto
    end: addHours(new Date(), 2),

  });

  // hacemos la memorizacion 
  const tittleClaas = useMemo(() => {

    // si no lo manda retornamos naa
    if (!formSubmitted) return " ";

    // si es asi le decimos que si los valores son mayor a 0 del titulo pasa sino no es valido
    return formValues.title.length > 0 ? "" : "is-invalid";

    // mandamos el formvalues del title y submited
  }, [formValues.title, formSubmitted]);

  useEffect(() => {
    
    // si no es nulo
    if(activeEvent !== null) {
      
      // esparsir todo el active con el estado siguiente
      setformValues({...activeEvent})
    
    } 
    
  }, [activeEvent])
  
  // el cambio del input le mandamos el target
  const onInputChange = ({ target }) => {

    // el nuevo set del values
    setformValues({
      
      // copia del valor
      ...formValues,
      
      // el target.name de target.value
      [target.name]: target.value,
    
    });
  
  };

  //                    la new fecha
  //                           los valores de start y end

  const onDateChanged = (event, changing) => {

    setformValues({

      ...formValues,


      [changing]: event,

    });

  };

  // cerrar el modal 
  const oncloseModal = () => {
    
    closeDateMoral()

  };

  // el submit es asyncrono recibiendo el evento 
  const onSubmit = async(event) => {

    // prevencion del evento
    event.preventDefault();

    // tiene que estar en true
    setFormSubmitted(true);

    // diferencia de segundos en final y start
    const difference = differenceInSeconds(formValues.end, formValues.start);

    // si no es un numero muestra esto
    // y si la diferencia es menor a igual 0

    if (isNaN(difference) || difference <= 0) {

      Swal.fire("Fechas Incorrectas", "Revisar las fechas ingresadas", "error");


      return;

    }

    // si los valores son mayores a 0 pasan 
    if (formValues.title.length <= 0) return;

    // await de el store del auth que recibe los valores
    await startSavingEvent(formValues)

    // se cierra 
    closeDateMoral()

    // y ponemos el submit como falso
    setFormSubmitted(false)

  };

  return (

    <Modal

      isOpen={isDateModalOpen}
  
      onRequestClose={oncloseModal}
  
      style={customStyles}
  
      className="modal"
  
      overlayClassName="modal-fondo"

      //closeTimeoutMS={200}
    >
      <h1> Nuevo evento </h1>

      <hr />

      <form className="container" onSubmit={onSubmit}>
  
        <div className="form-group mb-2">
  
          <label>Fecha y hora inicio</label>

          <DatePicker
  
            selected={formValues.start}
            
            onChange={(event) => onDateChanged(event, "start")}
            
            className="form-control"
            
            dateFormat="Pp"
            
            showTimeSelect
            
            locale="es"
            
            timeCaption="Hora"
          
          ></DatePicker>
        
        </div>

        <div className="form-group mb-2">
        
          <label>Fecha y hora fin</label>

          <DatePicker
            // no poner una fecha antes de la primera seleccionada
        
            minDate={formValues.start}
        
            selected={formValues.end}
        
            onChange={(event) => onDateChanged(event, "end")}
        
            className="form-control"
        
            dateFormat="Pp"
            // hacer que pueda seleccionar multiples horas
        
            showTimeSelect
        
            locale="es"
        
            timeCaption="Hora"
        
          ></DatePicker>
        
        </div>

        <hr />

        <div className="form-group mb-2">
          
          <label>Titulo y notas</label>

          <input
          
            type="text"
            
            className={`form-control ${tittleClaas} `}
            
            placeholder="Título del evento"
            
            name="title"
            
            autoComplete="off"
            
            value={formValues.title}
            
            onChange={onInputChange}
          
          />

          <small id="emailHelp" className="form-text text-muted">
           
            Una descripción corta
          
          </small>
        
        </div>

        <div className="form-group mb-2">
        
          <textarea
        
            type="text"
            
            className="form-control"
            
            placeholder="Notas"
            
            rows="5"
            
            name="notes"
            
            value={formValues.notes}
            
            onChange={onInputChange}
          
          ></textarea>

          <small id="emailHelp" className="form-text text-muted">
          
            Información adicional
          
          </small>
        
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
        
          <i className="far fa-save"></i>

          <span> Guardar</span>
        
        </button>
      
      </form>
    
    </Modal>
  
  );

};