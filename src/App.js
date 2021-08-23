import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Screens/Home";
import Add from "./Screens/Add";
import Layout from "./layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Screens/Search";
import Calendar from "./Screens/Calendar";
import Setting from "./Screens/Setting";
import Login from "./Screens/Login";
import jwt_decode from "jwt-decode";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import store from "./store";
import { connect } from "react-redux";
import { getToken } from "./auth/storage";

if (localStorage.eventApp) {
  const decode = jwt_decode(getToken());
  const currentTime = Date.now() / 1000;
  if (decode.exp < currentTime) {
    store.dispatch(logoutUser());
  } else {
    store.dispatch(setCurrentUser(decode));
  }
}
function App(props) {
  let links;
  if (props.isAuth) {
    links = (
      <Layout user={props.user} handlCick={props.logoutUser}>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/search" exact component={Search} />
          <Route path="/calendar" exact component={Calendar} />
          <Route path="/settings" exact component={Setting} />
          <Route path="/add" exact component={Add} />
          {/* <Route path="/login" exact component={Login} /> */}
          <Redirect to="/home" />
        </Switch>
      </Layout>
    );
  } else {
    links = (
      <Switch>
        <Route path="/login" exact component={Login} />
        <Redirect to="/login" />
      </Switch>
    );
  }
  return <BrowserRouter>{links}</BrowserRouter>;
}

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error,
  isAuth: auth.isAuth,
  user: auth.user,
});
const mapDispatchToProps = {
  setCurrentUser: setCurrentUser,
  logoutUser: logoutUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
