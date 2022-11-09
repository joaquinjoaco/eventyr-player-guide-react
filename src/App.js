import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Navbar from './components/Navbar';
import Eventyr from "./views/Eventyr";
import Home from './views/Home';
import Reglas from "./views/Reglas";
import Protecciones from "./views/Protecciones";

function App() {


  return (



    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/eventyr">
              <Eventyr />
            </Route>
            <Route>
              <Route path='/reglas'>
                <Reglas />
              </Route>
              <Route path='/protecciones'>
                <Protecciones />
              </Route>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
