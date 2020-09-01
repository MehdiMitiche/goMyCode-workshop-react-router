import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Messages from "./components/Messages";
import Forum from "./components/Forum";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/forum" exact>
          <Forum />
        </Route>
        <Route path="/messages/:id" exact>
          <Messages />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/articles" exact>
          <Articles />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
