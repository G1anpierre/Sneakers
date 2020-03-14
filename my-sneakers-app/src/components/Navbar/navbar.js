import React from 'react';
import './navbar.scss';


const Navbar = props => {


    return(

        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">CONVERSE</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav w-100 justify-content-center">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Women <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Men</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Kids</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Customize</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sale</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}




export default Navbar;