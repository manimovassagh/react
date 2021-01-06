


const Home = () => {
    const handleClick=()=> {
        console.log('hi mani you are really a react developer');
    }
    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <button onClick ={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;