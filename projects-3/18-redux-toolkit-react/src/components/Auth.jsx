import { useDispatch } from 'react-redux';
import classes from '../components/styles-components/Auth.module.css';
import authActions from '../store/authSlice';
import authSlice from '../store/authSlice';

const Auth = () => {

  const dispatch = useDispatch()

  const logginHandler = (event) => {

    event.preventDefault

    dispatch(authSlice.login())

  }

  return (

    <main className={classes.auth}>

      <section>

        <form onSubmit={logginHandler}>

          <div className={classes.control}>

            <label htmlFor='email'>Email</label>

            <input type='email' id='email' />

          </div>

          <div className={classes.control}>

            <label htmlFor='password'>Password</label>

            <input type='password' id='password' />

          </div>

          <button>Login</button>

        </form>

      </section>

    </main>

  );

};

export default Auth;
