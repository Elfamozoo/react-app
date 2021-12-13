import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from './pages/About';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
