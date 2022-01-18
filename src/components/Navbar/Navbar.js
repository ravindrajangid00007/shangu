import React from 'react'
import { Button } from '@material-ui/core';
import './Navbar.css';
import NavLogo from '../../images/nav-logo.065d7390b388f852ee143f1f59478f41.svg'
function Navbar() {
    return (
        <>
            <div className="navbarBox">
                <div className="logoBox">
                    <img src={NavLogo} alt="navLogo" />
                </div>
                <div className="navbarLinks">
                    <ul className="navbarLinksList">
                        <li><a href="#">Mint</a></li>
                        <li><a href="#">Artwork</a></li>
                        <li><a href="#">Roadmap</a></li>
                        <li><a href="#">TEAM</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="publicSale">
                    <Button className="publicSaleButton">PUBLIC SALE</Button>
                </div>
            </div>
        </>
    )
}

export default Navbar
