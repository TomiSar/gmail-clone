import React from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { auth, provider } from '../../firebase';
import './Login.css';

function Login() {
  const dispatch = useDispatch();

  const signInGmail = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
          alt=""
        />
        <Button variant="contained" color="primary" onClick={signInGmail}>
          Login To Gmail
        </Button>
      </div>
    </div>
  );
}

export default Login;
