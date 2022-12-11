import logo from './logo.svg';
import './App.css';
import ClassComponent1 from './components/ClassComponents/ClassComponent1';
import ClassComponent2 from './components/ClassComponents/ClassComponent2';
import FunctionComponent2 from './components/functionComponents/FunctionComponent2';
import FunctionComponent1 from './components/functionComponents/FunctionComponent1';
import FunctionComponent3 from './components/functionComponents/FunctionComponent3';

function App() {
  return (
    <div className="App">
      <ClassComponent1/>
      <ClassComponent2/>
      <FunctionComponent1/>
      <FunctionComponent2/>
      <FunctionComponent3/>
    </div>
  );
}

export default App;
