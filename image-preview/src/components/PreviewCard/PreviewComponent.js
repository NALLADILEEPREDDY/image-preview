import React, { useContext } from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { ThemeContext } from "../../App";
import "./previewComponent.scss";

export default function PreviewComponent() {
  const theme = useContext(ThemeContext);
  const information = useSelector((state) => state.mainStore.information);
  const title = useSelector((state) => state.mainStore.title);
  const selectedStream = useSelector((state) => state.mainStore.selectedStream);
  const uploadUrl = useSelector((state) => state.mainStore.uploadUrl);
  const inlineStyles = {
    align: "center",
    backgroundColor: theme,
    boxShadow: `0 3px 8px 0 ${theme},0 3px 12px 0 ${theme}`,
  };
  return (
    <div style={inlineStyles} className="card">
      <h2>{title && title}</h2>
      <div className="container">
        <div className="container__image">
          {uploadUrl && selectedStream === "photo" && <Picture />}
          {uploadUrl && selectedStream === "video" && <ReactPlayerU />}
        </div>
      </div>
      <div className="card-content">
        <p>{information && information}</p>
      </div>
    </div>
  );
}
const ReactPlayerU = () => {
  const uploadUrl = useSelector((state) => state.mainStore.uploadUrl);
  const uploadType = useSelector((state) => state.mainStore.uploadType);
  if (/^video/.test(uploadType) && uploadUrl) {
    return (
      <div className="player-wrapper">
        <ReactPlayer
          controls
          width='100%'
          height='100%'
          className="react-player"
          url={
            uploadType === "videoUrl"
              ? uploadUrl
              : uploadType === "video" &&
                URL.createObjectURL(uploadUrl.target.files[0])
          }
        />
      </div>
    );
  }
  return <></>;
};
const Picture = () => {
  const uploadUrl = useSelector((state) => state.mainStore.uploadUrl);
  const uploadType = useSelector((state) => state.mainStore.uploadType);
  if (/^photo/.test(uploadType) && uploadUrl) {
    return (
      <figure className="image">
        <img
          src={
            uploadType === "photoUrl"
              ? uploadUrl
              : uploadType === "photo" &&
                URL.createObjectURL(uploadUrl.target.files[0])
          }
          alt={uploadType ? uploadType : uploadUrl.target.files[0].name}
        />
      </figure>
    );
  }
  return <></>;
};
