import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ScrollToTop />
    </>
  );
}

export default App;
