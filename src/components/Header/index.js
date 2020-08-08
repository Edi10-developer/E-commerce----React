import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

import Logo from './../../assets/Logo.png';

const Header = props => {

    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                        {/* <img src={{Logo}} alt="EDI Logo" />  */}
                        <h2>Edi Selimi</h2>
                    </Link>
                </div>
                
                <div className="callToActions">
                    <ul>
                        <li>
                            <Link to="/registration">
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </header>
    );
};

export default Header;