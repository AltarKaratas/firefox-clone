import { Route, Switch, Redirect } from "react-router-dom";
import { useContext } from "react";

import HomePage from "./pages/HomePage";
import Layout from "./components/layout/Layout";
import HeaderPopUp from "./components/popup/HeaderPopUp";
import uiContext from "./store/ui-context";

function App() {
  const uiCtx = useContext(uiContext);

  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact>
            <HomePage />
            { uiCtx.popUpState && <HeaderPopUp data={uiCtx.popUpSelect.data} portal={uiCtx.popUpSelect.id} />}
          </Route>
          <Route path="*">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
