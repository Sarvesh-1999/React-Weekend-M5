import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{padding:"10px", display:"flex", justifyContent:"space-between"}}>
      <h2>Navbar</h2>

      <nav style={{display:"flex",gap:"40px"}}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default Navbar;
