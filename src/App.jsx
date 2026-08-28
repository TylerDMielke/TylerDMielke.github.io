import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import MainApp from './MainApp';
import GlobalStyles from './theme/GlobalStyles';
import theme from './theme/themes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <BrowserRouter>
          <MainApp />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
