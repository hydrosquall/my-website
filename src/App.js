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
      <Route path="/skills" component={Main} />
      <Route path="/works" component={Main} />
      <Route path="/more" component={Main} />
    </HashRouter>
  );
};

export default App;
