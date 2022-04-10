import Home from './Components/Home';
import './App.css';
import ScrollToTop from './Components/ScrollToTop';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Events from './Components/Events/Events';
import Memories from './Components/Memories/Memories';
import Register from './Components/Register/Register';
import Contact from './Components/Contact/Contact';
import Guidelines from './Components/Guidelines/Guidelines';


function App() {
  return (
    <Router className="app">
      <ScrollToTop />
      <Switch>
        <Route path="/events" component={Events} />
        <Route path="/register" component={Register} />
        <Route path="/memories" component={Memories} />
        <Route path="/contact" component={Contact} />
        <Route path="/guidelines" component={Guidelines} />
        <Route exact path="/" component={Home} />

      </Switch>
    </Router>
  );
}

export default App;
