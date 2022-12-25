import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Create } from "./Component/Create";
import { Delete } from "./Component/Delete";
import { Edit } from "./Component/Edit";
import { Layout } from "./Component/Layout";
import { NavBar } from "./Component/NavBar";
import { Users } from "./Component/Users";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Users/>} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/delete/:id" element={<Delete />} />
            <Route path="/create" element={<Create />} />
          </Route>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
