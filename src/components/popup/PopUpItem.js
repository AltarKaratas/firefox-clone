import React from "react";

import classes from './PopUpItem.module.css';

import { FaFirefoxBrowser } from 'react-icons/fa';


const PopUpItem = (props) => {
  return <li className={classes["pop-up-item"]}>
    <div className={classes["menu-icons"]}><FaFirefoxBrowser/></div>
    <h5 className={classes.header}>{props.header}</h5>
    <p className={classes.text}>{props.text}</p>
  </li>;
};
export default PopUpItem;