import 'core-js/es6/map';
import 'core-js/es6/set';

import { Switch, Route } from 'react-router-dom';
import { injectGlobal, ThemeProvider } from 'styled-components';
import React from 'react';

import Tracker from '../containers/Tracker';
import theme from './themes/default';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    margin: 0;
    background: skyblue;
  }
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <Switch>
      <Route path="/" component={Tracker} exact />
    </Switch>
  </ThemeProvider>
);

export default App;
