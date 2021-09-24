import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import NotFound from 'components/NotFound/NotFound'
import ExpandingCard from 'features/ExpandingCard/ExpandingCard'
import Home from 'features/Home/Home'
import ProgressStep from 'features/ProgressStep/ProgressStep'
import WhatAMole from 'features/WhacAMole/WhacAMole'
import { Redirect, Route, Switch } from 'react-router-dom'
import './App.scss'

function App() {
  return (
    <div className="app">
      {/* <Header /> */}

      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

        <Route path="/" exact component={Home} />
        <Route path="/whac-a-mole" component={WhatAMole} />
        <Route path="/expanding-cards" component={ExpandingCard} />
        <Route path="/progress-steps" component={ProgressStep} />

        <Route component={NotFound} />
      </Switch>

      {/* <Footer /> */}
    </div>
  )
}
export default App
