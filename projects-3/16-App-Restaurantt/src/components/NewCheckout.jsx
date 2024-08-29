import { useContext } from "react"
import { Modal } from "./UI/Modal"
import CartContex from "../store/CardContext"
import { formatting } from "../util/formatting"
import { Input } from "./Input"
import { Button } from "./UI/Button"
import userProgressContext from "../store/UserProggresContext"
import { useHttp } from "../hooks/useHttp"
import { Error } from "./Error"

// damos esta variable para evitar el error
const requestConfig = {

    // el metodo de la peticion es POST
    method: "POST",

    // y damos los headers
    headers: {
                
        "Content-Type" : "application/json"
            
    },
}

export const NewCheckout = () => {

    // mandamos el useContext que creamos de el cart
    const cartCtx = useContext(CartContex)

    // mandamos el useContext que creamos de progreso
    const userPorgressCtx = useContext(userProgressContext)

    // extreamos las propiedades que necesitamos
    // damos el hook de http donde damos la url y el objeto de arriba
    const {data, isLoanding: isSending, error, sendRequest, clearData} = useHttp("http://localhost:3000/orders", requestConfig)

    // damos el reduce del total del precio mas el item de la cantidad por el precio que empieza desde 0
    const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price , 0 )

    // cerrar
    const handleClose = () => {
        
        // damos el context del progress y cerramos el check
        userPorgressCtx.hideCheckout()
    
    }

    // final
    const handleFinish = () => {

        // damos el context del progress y cerramos el check
        userPorgressCtx.hideCheckout()

        // damos el context del cart y limpiamos el carrito
        cartCtx.clearCart()

        // quitamos la data
        clearData()
    
    }

    // submit del form
    const handleSubmit = (event) => {
        
        // damos el evento prevenido
        event.preventDefault()

        // damos el form data del evento que viene del target
        const fd = new FormData(event.target)

        // le damos el object de las entradas y el data de las entradas
        const customerData = Object.fromEntries(fd.entries()) // {email: ......}

        // damos la peticion del json
        sendRequest(JSON.stringify({
            
            // y damos la orden
            order: {
                
                // los items ceran el conntext de cart que viene de los items
                items: cartCtx.items,

                // el customer sera la data
                customer: customerData
            
            }
        
        }))
    
    }

    // variable de acciones
    let actions = (
        
        <>

            {/* Damos el boton que al hacerle click cierra */}

            <Button onClick={handleClose} type="button" textOnly>Close</Button>

            {/* Damos el boton de dar la orden */}
            <Button>Sumbit Order</Button>
        
        </>    
        
    )

    // si esta enviado
    if(isSending) { 
        
        // decimos que las acciones sera que su pedido esta en progreso
        actions = <p>Seding order data ...... </p>
    
    }
    
    // si la data pasa y no hay error
    if(data && !error) {
        
        // damos el modal 
        return <Modal 

            // el open es el context de progress que viene del progreso que sea igual a checkout
            open={userPorgressCtx.progress === "checkout"}

            // cerrar es con el final
            onClose={handleFinish}

        >

            <h2>Success!</h2>

            <p>You order was submitted successfully.</p>

            <p>We wiil get bacj to you with more details via email within the next few minutes</p>

            <p className="modal-actions">

                { /* Damos el boton personalizado de al hacerle click finaliza */ }

                <Button onClick={handleFinish}>OKAY</Button>


            </p>

        </Modal>

    }

    return (

        // damos el modal
        // el open es el context de progress que viene del progreso que sea igual a checkout
        // cerrar es con el close
        <Modal open={userPorgressCtx.progress === "checkout"} onClose={handleClose}>

            { /* Damos el submit de la peticion http */ }

            <form onSubmit={handleSubmit}>

                <h2>Checkout</h2>

                { /* Damos total de los productos */ }

                <p>Total Amount: {formatting.format(cartTotal)}</p>

                { /* Damos el componente del input donde damos su label, el tipo y su id del BACKEND */ }

                <Input label="Full Name" type="text" id="name"></Input>

                <Input label="Email Adress" type="email" id="email"></Input>

                <Input label="Street" type="text" id="street"></Input>

                <div className="control-row">

                    <Input label="Postal Code" type="text" id="postal-code"></Input>

                    <Input label="City" type="text" id="city"></Input>

                </div>

                {
                    // si hay error, damos el componete del error,damos el titulo y el error
                    error && <Error title="Failed to submit order" message={error}></Error>
                
                }

                { /* Damos las acciones */ }

                <p className="modal-actions">

                    {actions}

                </p>

            </form>

        </Modal>
  
    )

}
