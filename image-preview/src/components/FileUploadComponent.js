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

export default function FileUploadComponent() {
  const dispatch = useDispatch();
  const changeHandler = async (event) => {
    console.log(event);
    const suffix = "Url";
    const prefix = "photo";
    const reA = new RegExp("[a-z]*" + suffix, "i");
    const name = event.target.name;
    const reS = new RegExp(prefix + "[a-z]*", "i");
    await dispatch({ type: "UPDATE_UPLOAD_URL", payload: event });
    await dispatch({ type: "UPDATE_UPLOAD_TYPE", payload: reA.test(name) });
    await dispatch({
      type: "UPDATE_SELECTED_STREAM",
      payload: reS.test(name) ? "photo" : "video",
    });
  };
  const UploadPopover = (props) => {
    const { isImage, textFieldname, fileFieldname } = props;
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
                    onChange={changeHandler}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment>
                          <IconButton>
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
  return (
    <div className="uploadComponent">
      <UploadPopover
        isImage={true}
        textFieldname="photoUrl"
        fileFieldname="photo"
      />
      <UploadPopover
        isImage={false}
        textFieldname="videoUrl"
        fileFieldname="video"
      />
    </div>
  );
}
