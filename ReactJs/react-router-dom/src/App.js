import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import { Features } from "./Component/Features";
import { Home } from "./Component/Home";
import { NavBar } from "./Component/NavBar";
import { Nomatch } from "./Component/Nomatch";
import { Pricing } from "./Component/Pricing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features/>} />
          <Route path="/pricing" element={<Pricing/> } />
          <Route path="*" element={<Nomatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
