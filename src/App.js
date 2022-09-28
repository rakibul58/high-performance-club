import { useEffect} from 'react';

function App() {
 
  useEffect(()=>{
    fetch('exercises.json')
    .then(res => res.json())
    .then(data => console.log(data))
  },[])
  return (
    <div className="App">
      <h1>Heloo</h1>
    </div>
  );
}

export default App;
