import React, { useState } from "react";

import uiContext from "./ui-context";

const UIContextProvider = (props) => {
  const [popUpIsShown,setPopUpIsShown] = useState(false);
  const [popUpSelect,setPopUpSelect]=useState({
    data:"",
    id:0,
  });

  const togglePopUp = () => {
    setPopUpIsShown((prevState) => !prevState);
  };
  const toggleData = (data) => {
    setPopUpSelect(data);
  }

  return (
    <uiContext.Provider
      value={{popUpState: popUpIsShown, popUpSelect: popUpSelect , togglePopUpFn: togglePopUp, popUpDataFn: toggleData}}
    >
      {props.children}
    </uiContext.Provider>
  );
};
export default UIContextProvider;
