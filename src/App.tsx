import "./App.css";

import Home from "./screens/Home";
import About from "./screens/About";
import Experience from "./screens/Experience";
import Portofolio from "./screens/Portofolio";
import Contact from "./screens/Contact";

import FloatinNavigator from "./components/FloatinNavigator";

function App() {
  return (
    <>
      <FloatinNavigator />
      <Home />
      <About />
      <Experience />
      <Experience />
      <Portofolio />
      <Contact />
    </>
  );
}

export default App;
