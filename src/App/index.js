import React from 'react';
import ga from 'react-ga';
import { Router, withRouter } from 'react-router-dom';
import Routes from './routes';
import '../index.css';
// import Data from './data'
const createHistory = require('history').createBrowserHistory;
const history = createHistory();
const AppWithRouter = withRouter(Routes);

// Should this be moved to env vars? E.g. ga.initialize(process.env.GA_ID)
/* or, we could just run in production--if there is no benefit to getting analytics on staging
      if (process.env.DB_ENV === 'production') {
        ga.initialize('UA-143824465-1');
      }
    */
ga.initialize('UA-148058893-1', { debug: true });
ga.pageview('/');

const App = () => {
  return (
    <Router history={history}>
      <AppWithRouter />
    </Router>
  );
};

export default App;
