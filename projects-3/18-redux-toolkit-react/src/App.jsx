import { useSelector } from 'react-redux';
import Auth from './components/Auth';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import { CounterTolkit } from './components/CounterTolkkit';

const App = () => {

  const isAuth = useSelector(state => state.auth.isAuthentication)

  return (

    <>

      <Header></Header>

      {!isAuth && <Auth></Auth>}

      {isAuth && <UserProfile></UserProfile>}

      <CounterTolkit></CounterTolkit>
    
    </>

  );

}

export default App;