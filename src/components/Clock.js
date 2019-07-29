import React from "react";
import { CX_OFF_WHITE, CX_FONT } from "../utils/Constants.js";
import LiveClock from "react-live-clock";

const styles = {
  ClockFullStyle: {
    display: "flex",
    fontStyle: "bold",
    color: CX_OFF_WHITE,
    fontFamily: CX_FONT
  },
  ClockHrStyle: {
    fontSize: "83px"
  },
  ClockMinAndPlace: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "5px"
  },
  ClockMinStyle: {
    fontSize: "44px"
  },
  PlaceStyle: {
    fontSize: "28px",
    marginLeft: "14px",
    position: "relative",
    top: "6px"
  }
};

const ClockHr = ({ timezone }) => {
  return (
    <nav style={styles.ClockHrStyle}>
      <LiveClock format={"HH"} ticking={true} timezone={timezone} />
    </nav>
  );
};

const ClockMin = ({ timezone }) => {
  return (
    <nav style={styles.ClockMinStyle}>
      <LiveClock format={":mm"} ticking={true} timezone={timezone} />
    </nav>
  );
};

const Clock = ({ timezone, place }) => {
  return (
    <div style={styles.ClockFullStyle}>
      <ClockHr timezone={timezone} />
      <div style={styles.ClockMinAndPlace}>
        <div style={styles.PlaceStyle}>{place}</div>
        <ClockMin timezone={timezone} />
      </div>
    </div>
  );
};

export default Clock;