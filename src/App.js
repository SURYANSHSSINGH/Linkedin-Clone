import Home from "./Components/Home"
import Login from "./Components/Login"
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route  path="/home">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
