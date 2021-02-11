import React, { useContext} from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { ThemeContext } from "../App";
import "../App.scss";

export default function PreviewComponent() {
  const theme = useContext(ThemeContext);
  const information = useSelector((state) => state.mainStore.information);
  const title = useSelector((state) => state.mainStore.title); 
  const selectedStream = useSelector((state) => state.mainStore.selectedStream); 
  const inlineStyles = {
    width: "fit-content",
    backgroundColor: theme,
    boxShadow: `0 3px 8px 0 ${theme},0 3px 12px 0 ${theme}`,
  };
  return (
    <div style={inlineStyles}>
      <article className="card">
        <div>
          <h2>{title && title}</h2>
        </div>
        <div className="container">
          <div className="container__image">
            <div className="container__info">
              {selectedStream==='photo'&&<Picture />}
              {selectedStream==='video'&&<ReactPlayerU />}
            </div>
          </div>
        </div>
        <div className="card-content">
          <p>{information && information}</p>
        </div>
      </article>
    </div>
  );
}
const ReactPlayerU = () => {
  const uploadUrl = useSelector((state) => state.mainStore.uploadUrl);
  const uploadType = useSelector((state) => state.mainStore.uploadType);
  if(uploadUrl && uploadType){
    return (
      <div className="player-wrapper">
        <ReactPlayer controls  className='react-player' url={uploadType ?URL.createObjectURL(uploadUrl.target.files[0]):uploadUrl.target.value}/>
      </div>
    );
  }
  return <></>
};
const Picture = () => {
  const uploadUrl = useSelector((state) => state.mainStore.uploadUrl);
  const uploadType = useSelector((state) => state.mainStore.uploadType);
  if(uploadUrl && uploadType){
    return (
      <picture>
        <img className="image" src={uploadType?URL.createObjectURL(uploadUrl.target.files[0]):uploadUrl.target.value} alt={uploadType ?URL.createObjectURL(uploadUrl.target.files[0].name):uploadUrl.target.name} />
      </picture>
    );
  }
    return<></>
};
