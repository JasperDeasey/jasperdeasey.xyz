import './App.css';
import 'fontsource-roboto';
import Landing from "./ui/sections/landing/landing";
import About from "./ui/sections/about/about";
import Projects from "./ui/sections/projects";
import Experiences from "./ui/sections/experiences";
import Heading from "./ui/sections/heading";

function App() {
  return (
    <div className="App">
        <Heading/>
      <Landing/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
