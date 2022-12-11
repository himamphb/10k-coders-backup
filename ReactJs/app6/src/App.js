import "./App.css";
import ClassSibilingComponent from "./Components/ClassComponent1";
import ClassSibilingComponent2 from "./Components/ClassComponent2";
import FunctionComponent1, {
  ChildFunction,
  ParentFunction,
} from "./Components/FunctionComponent1";
import Mainfunction2 from "./Components/FunctionComponent2";
function App() {
  return (
    <div className="App">
      <FunctionComponent1 />
      <ChildFunction />
      <ParentFunction />
      <ClassSibilingComponent />
      <ClassSibilingComponent2 />
      <Mainfunction2 />
    </div>
  );
}

export default App;
