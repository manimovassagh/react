const Navbar = () => {
  const title ="Mani Personal Blog"
  return (
    
    <nav className="navbar">
      <h1>{title}</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href='/creat' style={{
          color:'white',
          backgroundColor:'#f1356d',
          borderRadius :'8px'
        }}>Creat New Blog</a>
      </div>
    </nav>
  );
};

export default Navbar;
