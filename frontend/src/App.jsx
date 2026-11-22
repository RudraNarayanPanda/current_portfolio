import Navbar from "./components/Navbar/Navbar";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

import "./App.css";
import "./components/styles/LightTheme.css";


function App() {

  return (

    <div className="app">

      <Navbar />

      <main>

        <Home />

        <About />

        <Projects />

        <Skills />

        <Contact />

      </main>

    </div>
  );
}


export default App;