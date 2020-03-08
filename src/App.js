import React from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router';
import Header from './components/Header';

// Views
import Home from './views/Home';
import PostDetails from './views/PostDetails';

// Theme
import 'semantic-ui-css/semantic.min.css'

const App = () => {
  return (
    <Container>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/post" component={PostDetails} />
        <Route render={() => (<div>Miss</div>)} />
      </Switch>
    </Container>
  );
}

export default App;