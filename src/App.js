import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import { Main, Illustrations } from "./screens";

const paths = [
  {path: '/article', isExact: true, Component: Main, props: {isArticle: true}},
  {path: '/illustrations', Component: Illustrations, isExact: true},
  {path: '/', isExact: true, Component: Main},
]

const App = () => (
  <HashRouter>
    <Switch>
    {
      paths.map(({path, Component, isExact, props}) => <Route key={path} path={path} exact={isExact} render={()=> <Component {...props}/>} />)
    }
    {
      paths.map(({path, Component, isExact, props}) => <Route key={path} path={`/:locale${path}`} exact={isExact} render={()=> <Component {...props}/>} />)
    }
    </Switch>
  </HashRouter>
);

export default App;
