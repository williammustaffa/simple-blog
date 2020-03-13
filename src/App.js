import React, { Fragment, useEffect } from "react";
import { Container } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch, Redirect } from "react-router";
import { fetchCategories, userCheckSession } from "store/actions";

// Common components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Views
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import PostDetailsView from "./views/PostDetailsView";
import DashboardView from "./views/DashboardView";
import EditPostView from "./views/EditPostview";
import CreatePostView from "./views/CreatePostView";
import NotFoundView from "./views/NotFoundView";

// Global styles
import "./assets/style/global.scss";
import "semantic-ui-css/semantic.min.css";

const PrivateRoute = ({ component, ...options }) => {
  const { user } = useSelector(state => ({
    user: state.user,
  }));

  return (
    user.isLoggedIn ?
    <Route component={component} {...options} />:
    <Redirect to={`/login?redirect=${options.location.pathname}`} />
  );
};

function App() {
  // App initialization
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userCheckSession());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Fragment>
      <Header />
      <Container className="app-container">
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/login" component={LoginView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/post/:id/:name" component={PostDetailsView} />
          <PrivateRoute exact path="/dashboard" component={DashboardView} />
          <PrivateRoute exact path="/dashboard/post" component={CreatePostView} />
          <PrivateRoute path="/dashboard/post/:id" component={EditPostView} />
          <Route component={NotFoundView} />
        </Switch>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default App;