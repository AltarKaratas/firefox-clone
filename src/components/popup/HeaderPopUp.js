import React, { useContext } from "react";
import ReactDOM from "react-dom";

import classes from "./HeaderPopUp.module.css";

import PopUpItem from "./PopUpItem";
import DUMMY_DATA from "../../DUMMY_DATA";
import uiContext from "../../store/ui-context";

const HeaderPopUp = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <PopUp data={props.data} />,
        document.getElementById(props.portal)
      )}
    </div>
  );
};

export const PopUp = (props) => {
  const uiCtx = useContext(uiContext);

  const dataArray = DUMMY_DATA[props.data];

  const menuItems = dataArray.map((subject) => {
    return (
      <PopUpItem
        key={subject.id}
        header={subject.header}
        text={subject.popUpText}
      />
    );
  });

  return (
      <div className={classes.container}>
        <ul className={classes["popup-container"]}>{menuItems}</ul>
        <div className={classes["button-container"]}>
          <button className={classes["menu-button"]}>
            View all Firefox Browsers
          </button>
        </div>
      </div>
  );
};

export default HeaderPopUp;
