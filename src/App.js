import React, { lazy, Suspense } from 'react';
import {
  HashRouter, Route, Switch, useLocation,
} from 'react-router-dom';
import { LoaderCircle } from './components';

const Illustrations = lazy(() => import('./screens/Illustrations/Illustrations'));
const Main = lazy(() => import('./screens/Main/Main'));

const useQuery = () => new URLSearchParams(useLocation().search);

const fallbackStyle = {
  width: '100%',
  height: '100%',
  minWidth: '100vw',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fcfcfc',
};
const FallBack = () => (
  <div style={fallbackStyle}>
    <LoaderCircle />
  </div>
);

const QueryScreen = () => {
  const query = useQuery();
  return (
    <Switch>
      <Route key="root" path="/" exact render={() => <Main page={query.get('page')} section={query.get('section')} />} />
      <Route key="illustrations" path="/illustrations" exact render={() => <Illustrations />} />
      <Route key="root-locale" path="/:locale/" exact render={() => <Main page={query.get('page')} section={query.get('section')} />} />
    </Switch>
  );
};

const App = () => (
  <Suspense fallback={<FallBack />}>
    <HashRouter>
      <QueryScreen />
    </HashRouter>
  </Suspense>
);

export default App;
