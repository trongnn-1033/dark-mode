import React, {useState} from "react";
import { ThemeProvider } from "styled-components";

import DarkTheme from "../../components/Themes/DarkTheme";
import LightTheme from "../../components/Themes/LightTheme";
import Home from "../Home";
import "../../styles/GlobalStyle.scss";


function App() {
  const localTheme = localStorage.getItem('theme');
  const [ theme, setTheme ] = useState( localTheme ? localTheme === 'dark' ? DarkTheme : LightTheme : DarkTheme)
  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
