import React, { Fragment, useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import uiContext from "../../store/ui-context";

import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  const history = useHistory();

  const uiCtx = useContext(uiContext);

  const homePageNavigation = () => {
    history.push("/");
  };

  const togglePopUp = (event) => {
    uiCtx.togglePopUpFn();
    uiCtx.popUpDataFn({
      data: event.target.attributes.data.nodeValue,
      id: event.target.id,
    });
    console.log(event);
  };

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.container}>
          <div className={classes["img-container"]}>
            <img
              className={classes["main-img"]}
              src="https://www.mozilla.org/media/protocol/img/logos/mozilla/logo-word-hor.e20791bb4dd4.svg"
            />
          </div>
          <div className={classes["link-items"]}>
            <div className={classes["link-container"]}>
              <Link
                id="pop-up-fb"
                onMouseOver={togglePopUp}
                onMouseLeave={togglePopUp}
                data={0}
                className={classes.navlink}
                to="/Products"
              >
                Firefox Browsers
              </Link>
            </div>
            <div className={classes["link-container"]}>
              <Link
                id="pop-up-products"
                className={classes.navlink}
                onMouseOver={togglePopUp}
                onMouseOut={togglePopUp}
                data={1}
                to="/home"
              >
                Products
              </Link>
            </div>
            <div className={classes["link-container"]}>
              <Link
                id="pop-up-about"
                className={classes.navlink}
                onMouseOver={togglePopUp}
                onMouseOut={togglePopUp}
                data={2}
                to="/home"
              >
                About Us
              </Link>
            </div>
            <div className={classes["link-container"]}>
              <Link className={classes.navlink} to="/home" >Innovation</Link>
            </div>
          </div>
        </div>
        <div className={classes["download-link-container"]}>
          <Link className={classes.link} to="/downloads">
            Download Firefox
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default MainNavigation;
