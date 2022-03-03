import React, { useContext } from "react";
import ReactSlider from "react-slider";
import SettingsContext from "../context/SettingsContext";
import BackButton from "./BackButton";

const Settings = () => {
  const settingsInfo = useContext(SettingsContext);

  const {
    workMinutes,
    breakMinutes,
    setWorkMinutes,
    setBreakMinutes,
    setShowSettings,
  } = settingsInfo;

  return (
    <div style={{ textAlign: "left" }}>
      <label>work minutes: {workMinutes}:00</label>
      <ReactSlider
        className={"slider"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={workMinutes}
        onChange={(newValue) => setWorkMinutes(newValue)}
        min={1}
        max={35}
      />
      <label>break minutes: {breakMinutes}:00</label>
      <ReactSlider
        className={"slider green"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={breakMinutes}
        onChange={(newValue) => setBreakMinutes(newValue)}
        min={1}
        max={15}
      />
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <BackButton onClick={() => setShowSettings(false)} />
      </div>
    </div>
  );
};

export default Settings;
