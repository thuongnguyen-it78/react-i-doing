import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import NotFound from 'components/NotFound/NotFound';
import WhatAMole from 'features/WhacAMole';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />

      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

        <Route path="/whac-a-mole" component={WhatAMole} />

        <Route component={NotFound} />
      </Switch>

      <Footer />
    </div>
  );
}
export default App;
