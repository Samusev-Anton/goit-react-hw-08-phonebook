import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles, theme } from 'Styles';

import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-07-phonebook">
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
