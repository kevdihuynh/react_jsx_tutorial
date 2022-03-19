import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import NavBar from './common/navbar/NavBar';
import React from "react";
import Messenger from "./pages/messenger/Messenger";
import About from "./pages/about/About";

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <Router>
                <NavBar />
                {/* A <Routes> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                <section className="container border-test">
                  <Routes>
                      <Route path="/messenger" element={<Messenger />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/" element={<Messenger />} />
                  </Routes>
                </section>
          </Router>
        </div>
    )
  };
}

export default App;
