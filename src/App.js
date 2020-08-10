import React from "react";
import { HashRouter, Route } from "react-router-dom";

import Main from "./screens/Main";
import Illustrations from "./screens/Illustrations";

const App = () => {
  return (
    <HashRouter>
      <Route path="/illustrations" exact component={Illustrations} />
      <Route path="/" exact component={Main} />
      <Route path="/about" component={Main} />
      <Route path="/studies" component={Main} />
      <Route path="/work" component={Main} />
      <Route path="/talks" component={Main} />
      <Route path="/more" component={Main} />
      <Route path="/sketchnoting" component={Main} />
    </HashRouter>
  );
};

export default App;
