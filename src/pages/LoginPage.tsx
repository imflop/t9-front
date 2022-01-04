import React from "react";
import { Link } from "react-router-dom";
import "../signin.css";

function LoginPage(): React.ReactElement {
  return (
    <>
      <main className="flex-shrink-0" role="main">
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 form-signin">
              <form>
                <h1 className="h2 text-center fw-normal mb-4">Login</h1>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <button className="w-100 btn btn-lg btn-dark" type="submit">
                  Sign in
                </button>
              </form>
              <Link to="/" className="mt-4 text-center">
                Back to main page
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default LoginPage;
