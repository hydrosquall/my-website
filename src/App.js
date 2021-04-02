import React from "react";
import { HashRouter, Route } from "react-router-dom";

import Main from "./screens/Main";
import Illustrations from "./screens/Illustrations";

const paths = [
  {path: '/illustrations', component: Illustrations, isExact: true},
  {path: '/', isExact: true, component: Main},
]

const App = () => (
  <HashRouter>
    {
      paths.map(({path, component, isExact}, index) => <Route key={index} path={path} exact={isExact} component={component} />)
    }
    {
      paths.map(({path, component, isExact}, index) => <Route key={index} path={`/:locale${path}`} exact={isExact} component={component} />)
    }
  </HashRouter>
);

export default App;
