import {TextareaAutosize } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./theme.scss";

const Suggestions = () => {
  const information = useSelector((state) => state.mainStore.information);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    if (event.target.value !== information) {
      dispatch({ type: "UPDATE_INFORMATION", payload: event.target.value });
    }
  };
  if (information) {
    return (
        <TextareaAutosize
          className="textarea"
          rowsMin={3}
          onChange={handleChange}
          value={information}
        />
    );
  }
  return <></>;
};

export default Suggestions;
