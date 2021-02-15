import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import "./theme.scss";

export default function Themes() {
  const dispatch = useDispatch();
  const changeTheme = useCallback(
    (event) => dispatch({ type: "CHANGE_THEME", payload: event.target.value }),
    [dispatch]
  );
  return (
    <div className="theme-selection">
      <button
        style={{ backgroundColor: "#F31D44" }}
        className="themeButton"
        value="#F31D44"
        onClick={changeTheme}
      />
      <button
        style={{ backgroundColor: "#1D3EF3" }}
        className="themeButton"
        value="#1D3EF3"
        onClick={changeTheme}
      />
      <button
        style={{ backgroundColor: "#27F31D" }}
        className="themeButton"
        value="#27F31D"
        onClick={changeTheme}
      />
      <button
        style={{ backgroundColor: "#F3EC1D" }}
        className="themeButton"
        value="#F3EC1D"
        onClick={changeTheme}
      />
    </div>
  );
}
