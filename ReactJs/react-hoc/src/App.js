import logo from './logo.svg';
import './App.css';
import Click from './Components/Click';
import Hover from './Components/Hover';
import { Button } from './Components/Button';

function App() {
  return (
    <div className="App">
      <Click name = "himam"/>
      <hr/>
      <Hover name="himam"/>
      
    </div>
  );
}

export default App;
