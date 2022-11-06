import React from "react";

import classes from "./PopUpItem.module.css";

import { FaFirefoxBrowser } from "react-icons/fa";

const PopUpItem = (props) => {
  return (
    <li className={classes["pop-up-item"]}>
      <div className={classes["menu-icon-container"]}>
        <img
          className={classes["menu-img"]}
          src="https://www.mozilla.org/media/protocol/img/logos/firefox/browser/logo.eb1324e44442.svg"
          alt="eldek"
        />
      </div>
      <div className={classes["content-container"]}>
        <h5 className={classes.header}>{props.header}</h5>
        <p className={classes.text}>{props.text}</p>
      </div>
    </li>
  );
};
export default PopUpItem;
