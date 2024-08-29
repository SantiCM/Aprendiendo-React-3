import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import { Meals } from "./components/Meals";
import { NewCheckout } from "./components/NewCheckout";
import { CardContextProvider } from "./store/CardContext";
import { UserProggresContextProvider } from "./store/UserProggresContext";

const App = () => {

  return (

    <UserProggresContextProvider>
      
      <CardContextProvider>
    
        <Header></Header>

        <Meals></Meals>

        <Cart></Cart>

        <NewCheckout></NewCheckout>
    
      </CardContextProvider>

    </UserProggresContextProvider>
  
  );

}

export default App;