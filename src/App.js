import './App.css';
// Import components
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Route, Switch } from "react-router-dom"
// import PAges
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"

function App() {
  // URL with heroku link
  const URL = "https://da-portfolio-server.herokuapp.com/";
  
  
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects URL={URL} />
        </Route>
        <Route path="/about">
          <About URL={URL} />
        </Route>
      </Switch>
      <Footer />    
</div>
  );
}

export default App;