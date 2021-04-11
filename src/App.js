import React, { lazy, Suspense } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

const Illustrations = lazy(() => import("./screens/Illustrations/Illustrations"));
const Main = lazy(() => import("./screens/Main/Main"));

const App = () => (
  <Suspense fallback={<span>Loading ...</span>}>
    <HashRouter>
      <Switch>
        <Route key="root" path='/' exact={true} render={()=> <Main/>}/>
        <Route key="article" path='/article' exact={true} render={()=> <Main isArticle={true}/>}/>
        <Route key="illustrations" path='/illustrations' exact={true} render={()=> <Illustrations/>}/>
        <Route key="root-locale" path='/:locale/' exact={true} render={()=> <Main/>}/>
        <Route key="locale-article" path='/:locale/article' exact={true} render={()=> <Main isArticle={true}/>}/>
      </Switch>
    </HashRouter>
  </Suspense>
);

export default App;
