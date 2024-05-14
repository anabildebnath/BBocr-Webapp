import classes from "../styles/Converter.module.css";
import React, { useState } from 'react';
import {Link} from "react-router-dom";

export default function Converter(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className={classes.converter}>
      <div className={classes.converterHeading}>
        <h1>{props.heading}</h1>
      </div>
      <div className={classes.converterBox}>
        <div className={classes.converterBox2}>
          <div className={classes.button1}>
            <label htmlFor="fileInput" className={classes.customButton1}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M13 12v-2h1v2h2v1h-2v2h-1v-2h-2v-1zm5 8H6V4H5v17h13zm1 0v2H4V3h2V1h10l5 5v14zM7 2v17h13V6l-4-4zm9 0 4 4h-4z"></path>
                </svg>
              </div>
              <div className={classes.buttonText}>Choose File</div>
            </label>
            <input id="fileInput" type="file" style={{ display: "none" }} />
          </div>
          <div className={classes.button2}>
            <label
              htmlFor="dropdownButton"
              className={classes.customButton2}
              onClick={toggleDropdown}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="m13.333 4 1.334 1.333L8 12 1.333 5.333 2.667 4 8 9.5z"></path>
                </svg>
              </div>
            </label>
            {dropdownOpen && (
              <div className={classes.dropdownContent}>
                {/* Dropdown options */}
                <Link to="/">Option 1</Link>
                <Link to="/">Option 2</Link>
                <Link to="/">Option 3</Link>
      
              </div>
            )}
            {/* <input id="fileInput" type="file" style={{ display: "none" }} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
