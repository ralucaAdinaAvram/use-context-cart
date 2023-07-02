import React,  {ReactNode,useState } from "react";

import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import Logo from "../components/assets/logo.jpg";
import BarsDark from '../components/assets/barsDark.png';

import "./Navbar.css";

const Navbar = (): any => {
  const mobile = window.innerWidth<=768 ? true:false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="navbar">
      <div className="left-menu">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>

        
      </div>
      {(menuOpened === false && mobile===true)?(
        <div  onClick={()=>setMenuOpened(true)}
        ><img src={BarsDark} alt="" style={{width:'5rem', height:'5rem', marginRight:'30px'}}/></div>
      ):( <div className="right-menu">
      
      <div className="link">
        <p>
          <Link to="/">Home</Link>
        </p>
      </div>
      

      <div className="link">
        <p>
          <Link to="/about">About</Link>
        </p>
    </div>

    <div className="link">
      <Link to="/contact"> Contact </Link>
    </div>
    <div className="link">
      <Link to="/cart">
        <ShoppingCart size={32} />
      </Link>
    </div>

    
  </div>)}

      
    </div>
  );
};

export default Navbar;
