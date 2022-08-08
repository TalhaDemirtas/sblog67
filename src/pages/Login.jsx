import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ggProvider, signIn } from '../helpers/firebase';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
  };

  const ggLogin = () => {
    ggProvider(navigate);
  };

  return (
    <div>
      <div className="card bg-dark text-white">
        <img
          src={'https://picsum.photos/800/800'}
          className="card-img"
          alt="samp"
        />
        <div className="card-img-overlay register-form p-5 w-75">
          <h1 className="form-title display-3">Login</h1>
          <form id="register" onSubmit={handleLogin}>
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
            <div className="link">Forgot Password?</div>
            <input
              type="submit"
              className="btn btn-primary form-control"
              value="Login"
            />
            <input
              className="btn btn-primary form-control mt-3"
              defaultValue="Continue with Google🔍"
              onClick={ggLogin}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
