import { Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
import Portfolio from "./components/portfolio/portfolio.jsx";
import Resume from "./components/resume/resume.jsx";

function App() {
  return (
    <div className="app">
      <Header/>
      <Route path="/contact" component={Contact}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/resume" component={Resume}/>
      <Footer/>
    </div>
  );
}

export default App;

