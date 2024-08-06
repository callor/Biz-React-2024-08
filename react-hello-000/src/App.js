import logo from "./logo.svg";
import "./App.css";
import Input from "./comps/Input";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Input />
    </div>
  );
};

export default App;
