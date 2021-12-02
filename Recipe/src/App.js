import React from "react";
import "./App.css";
import Recipe from "./Recipe";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/" component={Recipe}></Route>
         </Switch>
      </BrowserRouter>
   );
}

export default App;
