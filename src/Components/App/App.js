import React, { Fragment } from "react";
import { AppDiv } from "./app-style";
import DropIFC from "../DropIFC";
import LoadLocalIFC from "../LoadLocalIFC";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <AppDiv>
          <Switch>
            <Route path="/LoadIFC" component={LoadLocalIFC} exact />
            <Route path="/" component={DropIFC} />
          </Switch>
        </AppDiv>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
