import React from 'react';
import './styles.scss';
import Logo from './../../assets/Logo.png';

const Header = props => {

    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                   {/* <img src={{Logo}} alt="EDI Logo" />  */}
                   <h2>Edi Selimi</h2>
                </div>
            </div>

        </header>
    );
};

export default Header;