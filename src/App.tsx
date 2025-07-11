import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainApp from "./components/MainApp";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import Services from "./pages/Services";
import Approach from "./pages/Approach";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <MainApp>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/services" element={<Services />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainApp>
    </BrowserRouter>
  );
}
