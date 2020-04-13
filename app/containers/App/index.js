/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/Home/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { ThemeProvider } from "styled-components"
import lightTheme from "theme/light"
import darkTheme from 'theme/dark'
import GlobalStyle from '../../global-styles';

export default function App() {
  let theme = 'light'
  return (
    <div>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
      </>
      </ThemeProvider>
    </div>
  );
}
