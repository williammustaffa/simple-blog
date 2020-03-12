import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router";

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

const App = () => {
  return (
    <Fragment>
      <Header />
      <Container className="app-container">
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/login" component={LoginView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/post/:id/:name" component={PostDetailsView} />
          <Route exact path="/dashboard" component={DashboardView} />
          <Route exact path="/dashboard/post" component={CreatePostView} />
          <Route path="/dashboard/post/:id" component={EditPostView} />
          <Route component={NotFoundView} />
        </Switch>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default App;