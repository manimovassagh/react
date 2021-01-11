import { useState } from "react";



const Home = () => {
  const familhy="morattab"
  // let name ='mani';
  const [name, setName] = useState("mani");
  const[age,setAge]=useState(25);
  const handleClick = () => {
    setName("sahar");
    setAge(30);
    
  };

  return (
    <div className="home">
      <h2>HomePage</h2>
      <p>{name} {familhy} is {age} years old</p>
      <button style={{backgroundColor:'blue',color:'white',width:'100px',height:'50px',borderRadius:'100'}} onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
