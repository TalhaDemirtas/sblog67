import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../helpers/firebase';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    signIn(email, password, navigate)
    navigate('/')
  };

  return (
    <div>
      <div className="card bg-dark text-white">
        <img src={'https://picsum.photos/800/800'} className="card-img" alt="samp" />
        <div className="card-img-overlay register-form p-5 w-75">
        <h1 className="form-title display-3 shadow-sm">Login</h1>
        <form id="register" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email adress.."
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password.."
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='link'>Forgot Password?</div>
          <input
            type="submit"
            className="btn btn-primary form-control"
            value="Login"
          />
          <input
            type="submit"
            className="btn btn-primary form-control mt-3"
            value="Continue with Google"
          />
        </form>
      </div>
      </div>
    </div>
  );
};

export default Login;