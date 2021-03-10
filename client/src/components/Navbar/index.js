import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'



const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-brand" >Navbar</div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                    <li className="nav-item">
                        <NavLink to="/create" className="btn btn-primary" >Создать</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/links" className="btn btn-primary ml-2 mr-2">ссылки</NavLink>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-primary" onClick={logoutHandler}>Выход</button>
                    </li>

                </ul>
            </div>
        </nav>
    )


}

export default Navbar;