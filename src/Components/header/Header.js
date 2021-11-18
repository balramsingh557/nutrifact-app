import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../login/Login';
import M from 'materialize-css';
import './Header.css';

export default function Header() {

    const green = `#root {
        background-color: #4caf50;
        }`;
    const yellow = `#root {
        background-color: #f9a825;
        }`;
    const brown = `#root {
        background-color: #795548;
        }`;

    const modal = useRef();
    const sideNav = useRef();
    const dropdownTrigger1 = useRef();
    const dropdownTrigger2 = useRef();
    const [render, setRender] = useState(<></>);
    const [renderForMobile, setRenderForMobile] = useState(<></>);
    const [theme, setTheme] = useState(yellow);
    const [userDisplay, setUserDisplay] = useState({display: 'none'});


    useEffect(() => {
        M.Modal.init(modal.current);
        M.Sidenav.init(sideNav.current);

        M.Dropdown.init(dropdownTrigger1.current, {
            coverTrigger: false
        });
        M.Dropdown.init(dropdownTrigger2.current, {
            coverTrigger: false,
            constrainWidth: false
        });
        updateUI();
    }, []);

    const removeCredentials = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        updateUI();
    }

    const open = (e) => {
        e.preventDefault();
        M.Modal.getInstance(modal.current).open();
    }

    const close = () => {
        M.Modal.getInstance(modal.current).close();
    }

    const updateUI = () => {
        let name = localStorage.getItem('name');
        if(name !== null){
            setRender(<></>);
            setRenderForMobile(<>
                <li><Link to='/favourites'>Favourites</Link></li>
                <li><Link to="/" onClick={removeCredentials}>Logout</Link></li>
            </>);
            setUserDisplay({display: 'block'})
        }
        else{
            setRender(<>
                <li><Link to="/" onClick={open} >Login</Link></li>
                <li><Link to='/signup'>Sign Up</Link></li>
            </>);
            setRenderForMobile(<>
                <li><Link to="/" onClick={open} >Login</Link></li>
                <li><Link to='/signup'>Sign Up</Link></li>
            </>);
            setUserDisplay({display: 'none'})
        }
    }

    const themeChanger = (
        <>
            <span className="dot app-theme-green" onClick={() => setTheme(green)}></span>
            <span className="dot app-theme-yellow" onClick={() => setTheme(yellow)}></span>
            <span className="dot app-theme-brown" onClick={() => setTheme(brown)}></span>
        </>
    );

    const drowpdown1 = (
        <ul id="dropdown1" className="dropdown-content">
            <li><Link to='/favourites'>Favourites</Link></li>
            <li><a href="#!">Settings</a></li>
            <li className="divider" />
            <li><Link to="/" onClick={removeCredentials}>Logout</Link></li>
        </ul>

    );

    const drowpdown2 = (
        <ul id="dropdown2" className="dropdown-content">
            <li><Link to='/'>Services</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            <li className="divider" />
            <li style={{padding: '10px', cursor:"default"}}>{themeChanger}</li>
        </ul>

    );


    return (
    <header>
        <style>{theme}</style>
        {drowpdown1}
        {drowpdown2}
        
        <nav>
            <div className="nav-wrapper">

            <div className="brand-logo">
            <Link to="/">
            <img src="/images/logo.png" className="logo" alt="brand-logo"/>
            <span>NutriFact</span>
            </Link>
            </div>
            
            <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
                <i className="material-icons">menu</i>
            </a>

            <ul className="right hide-on-med-and-down">

                {render}

                {/* Dropdown 1 Trigger */}
                <li style={userDisplay}>
                    <a ref={dropdownTrigger1} href="#!" data-target="dropdown1">
                        {"Hi, " + localStorage.getItem("name")}
                        <i className="material-icons right">arrow_drop_down</i>
                    </a>
                </li>

                
                {/* Dropdown 2 Trigger */}
                <li>
                    <a ref={dropdownTrigger2} href="#!" data-target="dropdown2">
                        More<i className="material-icons right">arrow_drop_down</i>
                    </a>
                </li>

            </ul>

            </div>
        </nav>

        {/* Side Nav for mobile view */}
        <ul 
            className="sidenav"
            id="mobile-demo"
            ref={sideNav}
            onClick={() => M.Sidenav.getInstance(sideNav.current).close()}
        >
            <li style={{margin:'9px 0'}}>
                <Link to="/">
                    <i className="material-icons">home</i>NutriFact
                </Link>
            </li>
            <hr/>         
            <li><Link to='/'>Services</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            {renderForMobile}
            <li style={{padding: '10px 25px'}}>{themeChanger}</li>
            
        </ul>

        {/* Modal for Login */}

        <div ref={modal} className="modal" style={{backgroundColor: "rgba(255, 244, 230, 0.9)"}}>
            <Login loginDone={updateUI} modalClose={close}/>
        </div>

    </header>


    )
}