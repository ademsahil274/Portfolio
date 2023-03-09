import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<AboutMe />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        {/* <Route path="*" element={<NotFound />}></Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;