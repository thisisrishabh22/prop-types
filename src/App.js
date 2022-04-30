import "./App.css";
import Info from "./Components/Info";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Info name={"Rishabh"} age={20} render={<h1>Hello</h1>}/>
      </header>
    </div>
  );
}

export default App;
