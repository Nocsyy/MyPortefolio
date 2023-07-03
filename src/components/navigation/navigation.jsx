import { useState } from "react";
import { Link } from "react-router-dom";

import "./navigation.css";
function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);

    };
    return (
        <div>
            <header>
                <nav className="nav">
                    <div id="ctn-effect-glitch">
                    <Link to='/' style={{textDecoration : 'none'}}>
                        <h4>ANDY OZDEMIR +_+</h4>
                        <h4>ANDY OZDEMIR +_+</h4>
                        <h4>ANDY OZDEMIR +_+</h4>
                    </Link> 
                                     
                    </div>
                    <div className="ctn-list-menu">
                        <span className="material-symbols-outlined icon-menu"
                            onClick={handleMenuToggle}>
                            {menuOpen ? "menu_open" : "menu"}
                        </span>


                        {menuOpen && (

                            <ul>
                                <Link to="/réalisation" style={{ textDecoration: 'none' }}>
                                    <li>Réalisation</li>
                                </Link>
                                <Link to="/contact" style={{ textDecoration: 'none' }}>
                                    <li>Contact</li>
                                </Link>


                            </ul>
                        )}
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navigation;