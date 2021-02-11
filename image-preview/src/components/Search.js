import React from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useDispatch } from "react-redux";

function Search() {
  const dispatch = useDispatch();
  const topWines = ["malbec", "riesling", "merlot"];
  
  const searchInfo = async (event, value, reason) => {
    await dispatch({ type: "CHANGE_TITLE", payload: value });
    try {
      var options = {
        method: "GET",
        url:
          "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/description",
        params: { wine: value},
        headers: {
          "x-rapidapi-key":
            "9f1fcce246msh5dbdd2d983e907ep171cb1jsn695a77effa28",
          "x-rapidapi-host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        },
      };
      const hasWine = topWines.includes(value.toLowerCase());
      if (hasWine) {
        axios.request(options).then(async(response) =>{
          await dispatch({ type: "UPDATE_INFORMATION", payload: response.data.wineDescription });
        });
      }
    } catch (error) {
      console.error(error);
    }
  };  
  return (
    <div>
      <Autocomplete
        className="search"
        options={topWines}
        onInputChange={(event, value, reason) =>
          searchInfo(event, value, reason)
        }
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField {...params} label="Wine" variant="outlined" />
        )}
      />
    </div>
  );
}

export default Search;
