import { useDispatch, useSelector } from "react-redux";
import { FireBaseAuht } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { login, logout } from "../store/auth/authSlice";
import { startLoandingNotes } from "../store/journal/thunks";

export const useCheckAuth = () => {

  // destructuramos el status del selector del auth
  const { status } = useSelector((state) => state.auth);

  // dispatch
  const dispatch = useDispatch();

  // efecto de 
  useEffect(() => {
    // firebase de tarea asincrona que recibe el usuario
    onAuthStateChanged(FireBaseAuht, async (user) => {
      
      // si no existe el user el dispatch de logout no entra
      if (!user) return dispatch(logout());

      // desustruramos esto del user
      const { uid, email, displayName, photoURL } = user;

      // el dispatch del login y lo recojemos esto
      dispatch(login({ uid, email, displayName, photoURL }));

      //
      dispatch(startLoandingNotes());

    
    });

  }, []);

  // retornamos el status importante
  return status

};