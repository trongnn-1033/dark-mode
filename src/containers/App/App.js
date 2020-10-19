import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import DarkTheme from "../../components/Themes/DarkTheme";
import LightTheme from "../../components/Themes/LightTheme";
import Home from "../Home";
import "../../styles/GlobalStyle.scss";
import 'rc-slider/assets/index.css';

export const ThemeContext = React.createContext('');


function App() {
  const localTheme = localStorage.getItem('theme');
  const [ theme, setTheme ] = useState( localTheme || 'dark')
  return (
    <ThemeProvider theme={theme === 'dark' ? DarkTheme : LightTheme}>
      <ThemeContext.Provider value={ {changeTheme: setTheme, theme}} >
        <Home />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
