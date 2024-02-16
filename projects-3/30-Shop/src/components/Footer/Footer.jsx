import "./Fotter.css"
import footter from "../Assets/logo_big.png"
import instagram_icon from "../Assets/instagram_icon.png"
import pinterest_icon from "../Assets/pintester_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png"

export const Footer = () => {

    return (
    
        <div className="fotter">
            
            <div className="fotter-logo">

                <img src={footter}></img>

                <p>SHOPPER</p>

            </div>

            <ul className="fotter-links">

                <li>Company</li>

                <li>Products</li>

                <li>Offices</li>

                <li>About</li>

                <li>Contact</li>

            </ul>

            <div className="fotter-social-icon">
                
                <div className="fotter-icons-container">

                    <img src={instagram_icon}></img>

                </div >

                <div className="fotter-icons-container">

                    <img src={pinterest_icon}></img>

                </div >

                <div className="fotter-icons-container">

                    <img src={whatsapp_icon}></img>

                </div >    

            </div>

            <div className="fotter-copyright">

                <hr />

                <p>Copyright @ 2023</p>

            </div>

        </div>


    
    )

}