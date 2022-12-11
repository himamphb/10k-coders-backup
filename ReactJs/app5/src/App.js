import logo from './logo.svg';
import './App.css';
import ClassComponent1 from './Components/ClassComponents/ClassComponent1';
import ClassComponent2 from './Components/ClassComponents/ClassComponent2';
import FunctionComponent1 from './Components/FunctionComponents/FunctionComponent1';
import FunctionComponent2 from './Components/FunctionComponents/FunctionComponent2';

function App() {
  return (
    <div className="App">
     <ClassComponent1/>
     <ClassComponent2/>
     <FunctionComponent1/>
     <FunctionComponent2/>
    </div>
  );
}

export default App;
