import React from "react";
import { Navbar, Pricing, Footer } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home/Home";
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />

      </Switch>
      <Pricing/>
      <Footer/>
    </Router>
  );
}

export default App;
