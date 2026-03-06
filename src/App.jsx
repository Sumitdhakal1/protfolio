import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-[#f7f6f3] text-stone-900 font-sans overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
