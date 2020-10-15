import React, { useContext } from "react";
import ToggleSwitch from "./ToggleSwitch";
import { ThemeContext } from "../../containers/App/App";

function main(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { changeTheme, theme } = useContext(ThemeContext);
  const onHandleClick = (event) => {
    changeTheme(event.target.checked ? "dark" : "light");
  };
  return (
    <ToggleSwitch htmlFor="dark-mode">
      <input
        id="dark-mode"
        type="checkbox"
        defaultChecked={theme === "dark"}
        onClick={onHandleClick}
      />
      <span></span>
    </ToggleSwitch>
  );
}

export default main;
