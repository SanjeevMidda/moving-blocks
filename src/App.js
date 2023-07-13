import "./index.css";
import Block from "./components/Block";

function App() {
  return (
    <div className="App">
      <Block color={{ one: "blue", two: "red" }} />
      <Block color={{ one: "pink", two: "yellow" }} />
      <Block color={{ one: "purple", two: "grey" }} />
    </div>
  );
}

export default App;
