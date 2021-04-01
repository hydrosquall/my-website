import React from "react";
import { HashRouter, Route } from "react-router-dom";

import Main from "./screens/Main";
import Illustrations from "./screens/Illustrations";

const paths = [
  {path: '/illustrations', component: Illustrations, isExact: true},
  {path: '/', isExact: true, component: Main},
  {path: '/about', component: Main},
  {path: '/skills', component: Main},
  {path: '/works', component: Main},
  {path: '/more', component: Main}
]

const App = () => (
  <HashRouter>
  {
    paths.map(({path, component, isExact}) => <Route path={path} exact={isExact} component={component} />)
  }
  </HashRouter>
);

export default App;
