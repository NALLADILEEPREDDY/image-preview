import { Fab } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import "../App.scss";
import { useState } from "react";

const UploadPopover = (props) => {
  const dispatch = useDispatch();
  const [url,setUrl] = useState("");
  const [name,setName] = useState("");
  const { isImage, textFieldname, fileFieldname,changeHandler } = props;
  const clickSearchHandler = async () => {  
    await dispatch({
      type: "UPDATE_SELECTED_STREAM",
      payload:  /^photo/.test(name)?"photo":/^video/.test(name)&&"video",
    });  
    await dispatch({ type: "UPDATE_UPLOAD_TYPE", payload: name });
    await dispatch({ type: "UPDATE_UPLOAD_URL", payload: url });
  };
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button
            variant="contained"
            color="primary"
            {...bindTrigger(popupState)}
          >
            {isImage ? "ADD IMAGES" : "ADD VIDEOS"}
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Box p={2}>
              <div className="inputIcons">
                <input
                  label="attachement"
                  accept={isImage ? "image/*" : "video/*"}
                  style={{ display: "none" }}
                  id="contained-button-file"
                  name={fileFieldname}
                  type="file"
                  onChange={changeHandler}
                />
                <label htmlFor="contained-button-file">
                  <Fab component="span">
                    {isImage ? <AddPhotoAlternateIcon /> : <VideoLabelIcon />}
                  </Fab>
                </label>
                <TextField
                  label="Add URL"
                  name={textFieldname}
                  value={url}
                  onChange={(event)=>{setUrl(event.target.value);setName(event.target.name)}}                                    
                  InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        <IconButton name={textFieldname}  onClick={clickSearchHandler}>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
};

export default function FileUploadComponent() {
  const dispatch = useDispatch();
  const changeHandler = async (event) => {
    const name = event.target.name;
    await dispatch({ type: "UPDATE_UPLOAD_URL", payload: event });
    await dispatch({ type: "UPDATE_UPLOAD_TYPE", payload: name });
    await dispatch({
      type: "UPDATE_SELECTED_STREAM",
      payload:  /^photo/.test(name)?"photo":/^video/.test(name)&&"video",
    });
  };
  return (
    <div className="uploadComponent">
      <UploadPopover
        isImage={true}
        textFieldname="photoUrl"
        fileFieldname="photo"
        changeHandler={changeHandler}
      />
      <UploadPopover
        isImage={false}
        textFieldname="videoUrl"
        fileFieldname="video"
        changeHandler={changeHandler}
      />
    </div>
  );
}
