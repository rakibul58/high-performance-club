import Details from "./Components/Details/Details";
import Exercises from "./Components/Exercises/Exercises";


function App() {
  return (
    <div className="App d-flex flex-column flex-md-row">
      <Exercises></Exercises>
      <Details></Details>
    </div>
  );
}

export default App;
