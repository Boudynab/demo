const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>The Dojo Blog</h1>
        <div className="links">
          <p href="/">Home</p>
          <p href="/create" style={
            {
              color: "white",
              backgroundColor: "black",
              borderRadius: "5px",
              padding: "10px 20px",
              textDecoration: "none",
              marginLeft: "10px"
            }
          }>New Blog</p>
        </div>
      </nav>
    );
  }
   
  export default Navbar;

