import "./App.css";
import ClassComponent1 from "./Components/ClassComponents/ClassComponent1";
import ClassComponent2 from "./Components/ClassComponents/ClassComponent2";
import ClassComponent3 from "./Components/ClassComponents/ClassComponent3";
import Functioncomponent1 from "./Components/FunctionComponents/FunctionComponent1";
import Functioncomponent2 from "./Components/FunctionComponents/FunctionComponent2";
import Functioncomponent3 from "./Components/FunctionComponents/FunctionComponent3";
import Functioncomponent4 from "./Components/FunctionComponents/FunctionComponent4";
import Functioncomponent5 from "./Components/FunctionComponents/FunctionComponent5";

function App() {
  return (
    <div className="App">
      <Functioncomponent1 />
      <Functioncomponent2 />
      <Functioncomponent3 />
      <Functioncomponent4 />
      <Functioncomponent5 />
      <ClassComponent1/>
      <ClassComponent2/>
      <ClassComponent3/>
    </div>
  );
}

export default App;
