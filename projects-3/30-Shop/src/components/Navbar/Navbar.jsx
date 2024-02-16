import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { startLogout } from "../../store/auth/thunks"
import { ShopContext } from "../../context/ShopContext"

export const Navbar = () => {

    const [menu, setMenu] = useState("shop")

    const {totalItems} = useContext(ShopContext)

    const {displayName, status}  = useSelector(state => state.auth) 

    // dispatch
    const dispatch =  useDispatch()

    // Esto es para hacer que nos salgamos al logout osea salir
    const onLogout = () => {
          
        dispatch(startLogout())
       
    } 
  
    return (
  
        <div className='navbar'>

            <div className="nav-logo">

                <img src={logo} alt="Logo Tienda"/>

                <p>SHOPPER</p>

            </div>

            <ul className="nav-menu">

                <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration: "none", color: "black"}} to="/">Shop</Link> {menu === "shop" ? <hr></hr> : ""} </li>

                <li onClick={() => {setMenu("mens")}}><Link style={{textDecoration: "none", color: "black"}} to="/mens">Men</Link> {menu === "mens" ? <hr></hr> : ""}</li>

                <li onClick={() => {setMenu("womens")}}><Link style={{textDecoration: "none", color: "black"}} to="/womens">Women</Link> {menu === "womens" ? <hr></hr> : ""}</li>
                
                <li onClick={() => {setMenu("kids")}}><Link style={{textDecoration: "none", color: "black"}} to="/kids">Kids</Link> {menu === "kids" ? <hr></hr> : ""}</li>

            </ul>

            <div className="nav-login-cart">

                <Link to="/cart"><img src={cart_icon} alt="Carrito De Compras"></img></Link>

                <div className="nav-cart-count">

                    {totalItems}

                </div>

                {displayName ? <p style={{fontSize: 20}}>{displayName}</p> : <Link  to="/login"><button>Login</button></Link>}

                {(status === "authenticed") ? <button onClick={onLogout} style={{background: "white", color: "black",width: 100, borderRadius: 50, border: "none"}}>Logout</button> : undefined}

            </div>

        </div>
  
    )

}