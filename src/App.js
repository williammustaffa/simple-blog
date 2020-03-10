import React from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router";
import Header from "./components/Header";

// Views
import Home from "./views/Home";
import PostDetails from "./views/PostDetails";
import Register from "./views/Register";
import NotFoundPage from "./views/NotFoundPage";

// Theme
import "semantic-ui-css/semantic.min.css"

const App = () => {
  return (
    <Container>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/post/:id/:name" component={PostDetails} />
        <Route component={NotFoundPage} />
      </Switch>
    </Container>
  );
}

export default App;