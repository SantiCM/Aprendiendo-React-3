import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "../../config/firebase";
import GoogleIcon from "@mui/icons-material/Google";
import LogoutIcon from "@mui/icons-material/Logout";

export function Authentication() {
  const authenticacion = auth;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const singIn = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  async function handleSingInWithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  }

  async function logout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form
        onSubmit={singIn}
        className="mt-10 flex flex-col justify-start items-start gap-y-10"
      >
        <input
          placeholder="Email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(ev) => handleChange("email", ev.target.value)}
        />
        <input
          placeholder="Password"
          id="password"
          name="password"
          value={formData.password}
          onChange={(ev) => handleChange("password", ev.target.value)}
        />
        <button>Sign In</button>
      </form>
      <button
        type="submit"
        onClick={handleSingInWithGoogle}
        className="google mt-3"
      >
        <div className="flex justify-center items-center gap-x-3">
          <GoogleIcon />
          Sign In With Google
        </div>
      </button>
      <button type="button" onClick={logout} className="logout mt-3">
        <div className="flex justify-center items-center gap-x-3">
          <LogoutIcon />
          Logout
        </div>
      </button>
      {authenticacion.currentUser && (
        <div className="mt-5 flex flex-col gap-y-4 justify-center items-center">
          <img
            src={authenticacion?.currentUser?.photoURL}
            width={100}
            height={100}
          />
          <h1>{authenticacion?.currentUser?.email}</h1>
          <span> {authenticacion?.currentUser?.displayName}</span>
        </div>
      )}
    </>
  );
}
