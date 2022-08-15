import "./ClockType.css";
import { useState, useEffect } from "react";

function ClockType({ is24H, stIs24H }) {
  return (
    <>
      <p className="d-inline">12 hour</p>
      <div className="d-inline">
        <input
          type="checkbox"
          id="switch"
          checked={is24H ? "checked" : ""}
          onChange={() => {
            stIs24H(!is24H);
          }}
        />
        <label for="switch">Toggle</label>
      </div>
      <p className="d-inline">24 hour</p>
    </>
  );
}

export default ClockType;
