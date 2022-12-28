import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Components/Contect";
import { NavBar } from "./Components/NavBar";
import { LoginComp } from "./Components/LoginComp";
import { RequiredAuth } from "./Components/RequiredAuth";
import { Products } from "./Components/Products";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <h2>Hello World from Auth Project</h2>
          <Routes>
            <Route path="/" element={<LoginComp />} />
            <Route
              path="/products"
              element={
                <RequiredAuth>
                  <Products/>
                </RequiredAuth>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
