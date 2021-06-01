import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Single2 from "./pages/single/Single2";
import Single3 from "./pages/single/Single3";
import Single4 from "./pages/single/Single4";
import Single5 from "./pages/single/Single5";
import Single6 from "./pages/single/Single6";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
        <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Homepage /> : <Login />}
        </Route>
        <Route path="/post/p1">
          <Single />
        </Route>
        <Route path="/post/p2">
          <Single2 />
        </Route>
        <Route path="/post/p3">
          <Single3 />
        </Route>
        <Route path="/post/p4">
          <Single4 />
          </Route>
          <Route path="/post/p5">
          <Single5/>
          </Route>
        <Route path="/post/p6">
          <Single6/>
        </Route>
        
        <Route path="/write">{currentUser ? <Write /> : <Login />}
        </Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
