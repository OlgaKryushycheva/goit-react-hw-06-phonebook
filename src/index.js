import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Global, ThemeProvider } from '@emotion/react';
import { App } from 'components/App';
import { store } from 'redux/store';
import { GlobalStyles } from 'Styles/GlobalStyle';
import { theme } from './Styles/Theme';
// import { store } from 'redux/pure-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
      <Global styles={GlobalStyles} />
    </ThemeProvider>
  </React.StrictMode>
);
