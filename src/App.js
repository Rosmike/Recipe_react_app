import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "firebase/analytics";

import "firebase/auth";
import "firebase/firestore";
import LoginApp from "./Login/LoginApp";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginApp} />
      </Switch>
    </Router>
  );
};

export default App;
