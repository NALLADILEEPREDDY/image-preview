import { Fab } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import { bindTrigger, bindPopover } from "material-ui-popup-state";
import { useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";
import { usePopupState } from "material-ui-popup-state/hooks";
import "./fileUpload.scss";

const UploadPopover = (props) => {
  const dispatch = useDispatch();
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const { isImage, textFieldname, fileFieldname } = props;
  const popupState = usePopupState({ variant: "popover", popupId: "demoMenu" });

  const attachFileHandler = async (event) => {
    const name = event.target.name;
    await dispatch({ type: "UPDATE_UPLOAD_URL", payload: event });
    await dispatch({ type: "UPDATE_UPLOAD_TYPE", payload: name });
    await dispatch({
      type: "UPDATE_SELECTED_STREAM",
      payload: /^photo/.test(name) ? "photo" : /^video/.test(name) && "video",
    });
  };

  const clickSearchHandler = async () => {
    await dispatch({
      type: "UPDATE_SELECTED_STREAM",
      payload: /^photo/.test(name) ? "photo" : /^video/.test(name) && "video",
    });
    await dispatch({ type: "UPDATE_UPLOAD_TYPE", payload: name });
    await dispatch({ type: "UPDATE_UPLOAD_URL", payload: url });
  };
  return (
    <div>
      <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
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
            <div className="icon">
              <input
                label="attachement"
                accept={isImage ? "image/*" : "video/*"}
                style={{ display: "none" }}
                id="contained-button-file"
                name={fileFieldname}
                type="file"
                onChange={(event) => {
                  attachFileHandler(event);
                  popupState.close();
                }}
              />
              <label htmlFor="contained-button-file">
                <Fab component="span">
                  {isImage ? <AddPhotoAlternateIcon /> : <VideoLabelIcon />}
                </Fab>
              </label>
            </div>
            <div className="icon">
              <TextField
                label="Add URL"
                name={textFieldname}
                value={url}
                onChange={(event) => {
                  setUrl(event.target.value);
                  setName(event.target.name);
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton
                        name={textFieldname}
                        onClick={(event) => {
                          clickSearchHandler(event);
                          popupState.close();
                        }}
                      >
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
        </Box>
      </Popover>
    </div>
  );
};

export default function FileUploadComponent() {
  return (
    <div className="uploadComponent">
      <div className="uploadButton">
        <UploadPopover
          isImage={true}
          textFieldname="photoUrl"
          fileFieldname="photo"
        />
      </div>
      <div className="uploadButton">
        <UploadPopover
          isImage={false}
          textFieldname="videoUrl"
          fileFieldname="video"
        />
      </div>
    </div>
  );
}
