import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { GridItems } from "./components/GridItems";
import { Header } from "./components/Header";
import { ItemPopup } from "./components/ItemPopup";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/about" element={<About />}>
            About
          </Route>
          <Route path="/contact" element={<Contact />}>
            Contact
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
