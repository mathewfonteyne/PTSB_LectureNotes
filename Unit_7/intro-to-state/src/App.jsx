// Make sure to first import useState from React!
import { useState } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Welcome from "./components/welcome/Welcome";
import Counter from "./components/counter/Counter";

function App() {
  // const name = "Zuko";

  // keyword [ variable, function ] = hook(initial value);
  // const [name, setName] = useState("Frodo");
  const [names, setName] = useState(["Frodo", "Sam", "Pippin", "Merri"]);
  const [count, setCount] = useState(0);
  // Build a function that will map and display a welcome per Hobbit. (this will return a welcome component per Hobbit)

  const displayWelcome = () => {
    return names.map((name, index) => {
      // Per name we use return so each name gets a component returned
      // Passing the whole names array and setNames functionality to the child component Welcome
      // This will allow us to change the array in the child component
      return (
        <Welcome
          key={index}
          name={name}
          names={names} // Pass the whole array as props
          setName={setName} // Passing our setName function
        />
      );
    });
  };

  return (
    <div className="App">
      <Nav />
      {/* <Welcome name={name} /> was replaced by the mapping function above!*/}
      {displayWelcome()}
      <Counter count={count} setCount={setCount} />
    </div>
  );
}

export default App;
