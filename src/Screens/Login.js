import React, { useState } from "react";

import { useForm } from "react-hook-form";

import "./Login.css";
import logo from "../assets/logo2.PNG";
import Footer from "../layout/Footer";
import { loginUser } from "../actions/authActions";
import { connect } from "react-redux";

const Login = (props) => {
  const { register, handleSubmit } = useForm();
  const [error, seterror] = useState();

  const onSubmit = async (values) => {
    props.login(values);
  };

  return (
    <div className="login-container">
      <div id="login">
        <h2 className="text-center text-white pt-5">
          Event Manager <br />
        </h2>

        <div className="container">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form
                  id="login-form"
                  className="form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="logo-container">
                    <img src={logo} alt="logo" height="100px" />
                    {error && <p className="text-danger">{error}</p>}
                  </div>
                  <div className="form-group">
                    <label className="text-info">Username:</label>
                    <br />
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="form-control"
                      {...register("username", { required: true })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-info">Password:</label>
                    <br />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      {...register("password", { required: true })}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      name="submit"
                      className="btn btn-info btn-md"
                      value="Connexion"
                    />
                  </div>
                </form>
                <div className="login-footer">
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error,
  isAuth: auth.isAuth,
});

const mapDispatchToProps = {
  login: loginUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
