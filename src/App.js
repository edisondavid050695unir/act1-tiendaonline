import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Shop, Contact, Blog } from "./Pages";
import { Header, Footer, Menu } from "./components";

function App() {
  return (
    <Router>
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
