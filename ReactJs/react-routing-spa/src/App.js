import {BrowserRouter,Route,Routes,} from 'react-router-dom'
import './App.css';
import { Create } from "./Component/Create";
import { Delete } from "./Component/Delete";
import { Edit } from "./Component/Edit";
import { Footer } from './Component/Footer';
import { Layout } from "./Component/Layout";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
        <Route path="/" element = {<Layout/>}>
          <Route path="/edit" element = {<Edit/>}/>
          <Route path="/delete" element = {<Delete/>}/>
          <Route path="/create" element = {<Create/>}/>
          {/* <Route path="/" element = {<Footer/>}/> */}
        </Route>
       
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
