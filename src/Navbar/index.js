import React, {useState} from 'react';
import { Link } from 'react-scroll';

import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const fecharMenuMobile = () => setClick(false)


    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to="/" className="navbar-logo" onClick={fecharMenuMobile}>
                        trip<Link className='yellow'>zil</Link>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                      <li className="nav-item"><Link onClick={fecharMenuMobile} to='home' className='nav-links' >Home</Link></li>
                      <li className="nav-item"><Link onClick={fecharMenuMobile} to='plataforma' className='nav-links'>Plataforma</Link></li>
                      <li className="nav-item"><Link onClick={fecharMenuMobile} to='programas' className='nav-links'>Programas</Link></li>
                      <li className="nav-item"><Link onClick={fecharMenuMobile} to='experiencia' className='nav-links'>Experiência</Link></li>
                      <li className="nav-item"><Link onClick={fecharMenuMobile} to='parceiros' className='nav-links'>Parceiros</Link></li>
                      <li className="nav-item"><Link onClick={fecharMenuMobile} to='contato' className='nav-links'>Contato</Link></li>
                      <li className="nav-btn">
                        <Link to="contato" className="btn-link">
                            <button className='btn-navbar' >Cadastrar</button>
                        </Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
