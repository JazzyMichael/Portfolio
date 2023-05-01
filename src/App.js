import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
// import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="space-background">
        <Header />
        <About />
        <Skills />
      </div>
      <div className="blur-background">
        <Projects />
        {/* <Experience /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
