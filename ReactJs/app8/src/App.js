
import './App.css';
import FunctionChange from './Components/FunctionComponent';
import { ClassComponent2 } from './Components/ClassComponent2';
import { ClassConstructorState } from './Components/ClassComponent1';

function App() {
  return (
    <div className="App">
      <FunctionChange/>
      <ClassComponent2/>
      <ClassConstructorState/>
    </div>
  );
}

export default App;
