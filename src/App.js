import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Navbar from './components/Navbar';
import Eventyr from "./views/Eventyr";
import Home from './views/Home';
import Reglas from "./views/Reglas";
import Protecciones from "./views/Protecciones";
import Pwarps from "./views/Pwarps";
import Rangos from "./views/Rangos";
import Encantamientos from "./views/Encantamientos";
import Quests from "./views/Quests";
import Mcmmo from "./views/Mcmmo";
import Jobs from "./views/Jobs";
import Subastas from "./views/Subastas";
import Vehiculos from "./views/Vehiculos";
import NotFound from "./views/NotFound";

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
            <Route path='/reglas'>
              <Reglas />
            </Route>
            <Route path='/protecciones'>
              <Protecciones />
            </Route>
            <Route path='/pwarps'>
              <Pwarps />
            </Route>
            <Route path='/rangos'>
              <Rangos />
            </Route>
            <Route path='/encantamientos'>
              <Encantamientos />
            </Route>
            <Route path='/quests'>
              <Quests />
            </Route>
            <Route path='/mcmmo'>
              <Mcmmo />
            </Route>
            <Route path='/jobs'>
              <Jobs />
            </Route>
            <Route path='/subastas'>
              <Subastas />
            </Route>
            <Route path='/vehiculos'>
              <Vehiculos />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
