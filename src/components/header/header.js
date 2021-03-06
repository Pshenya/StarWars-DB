import React from "react";
import {Link} from "react-router-dom";

import './header.css'


const Header = () => {
    return (
        <div className="header d-flex animated fadeInUp">
            <h3>
                <Link to="/">
                    Star DB
                </Link>
            </h3>
            <ul className="nav-list d-flex">
                <li>
                    <Link to="/people/">People</Link>
                </li>
                <li>
                    <Link to="/planets/">Planets</Link>
                </li>
                <li>
                    <Link to="/starships/">Starships</Link>
                </li>
                <li style={{marginLeft: '900px'}}>
                    <a href="#">EN</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;