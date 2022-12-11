
import './App.css';
import { ClassComponent2 } from './Components/ClassComponent2';
import { ClassConstructorState } from './Components/ClassComponents1';
import FunctionChange from './Components/FunctionComponent';

function App() {
  return (
    <div className="App">
      <ClassConstructorState/>
      <ClassComponent2/>
      <FunctionChange/>
    </div>
  );
}

export default App;
