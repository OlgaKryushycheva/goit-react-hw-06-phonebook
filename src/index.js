import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Global, ThemeProvider } from '@emotion/react';

import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'redux/store';

import { App } from 'components/App';

import { GlobalStyles } from 'Styles/GlobalStyle';
import { theme } from './Styles/Theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
      <Global styles={GlobalStyles} />
    </ThemeProvider>
  </React.StrictMode>
);
