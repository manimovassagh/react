import Navbar from "./navbar";
import Home from './Home';

// const person = [name:'mani',family:'movassagh']
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
