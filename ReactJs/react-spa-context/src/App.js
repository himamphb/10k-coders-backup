import logo from './logo.svg';
import './App.css';
import { ContextProvider } from './Components/Context';
import { Main } from './Components/Main';

function App() {
  return (
    <div className="App">
      <ContextProvider value="himam">
        <Main/>
      </ContextProvider>
    </div>
  );
}

export default App;
