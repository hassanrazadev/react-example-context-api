import React from 'react';
import ReactDOM from 'react-dom';
import App2 from './App2';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Route, BrowserRouter as Router} from 'react-router-dom';
import {ContextProvider} from "./context";
import Navigation from "./Navigation";

ReactDOM.render(
  <React.StrictMode>
      <ContextProvider>
          <Router>
              <Navigation/>
              <Route path="/" exact component={App}/>
            <Route path="/app2" component={App2}/>
        </Router>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
