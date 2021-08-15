/* eslint-disable react-hooks/exhaustive-deps */

import React, { Fragment, useContext, useEffect } from 'react'
// import logo from './../res/images/logo/default.png'
// import img from './../res/images/default-user-image.jpg'
import {Link} from 'react-router-dom';
import { UserGlobalContext } from '../../context/userContext/UserState';
// import { UserGlobalContext } from '../context/userContext/UserState';


const openNav=()=> {
  document.getElementById("mySidenav").style.width = "50%";
}

/* Set the width of the side navigation to 0 */
const closeNav=()=> {
  document.getElementById("mySidenav").style.width = "0";
}

const Header = () => {

    const context = useContext(UserGlobalContext)
    const {isAuthed,logout,loadUser,getReservations} = context
    // const history = useHistory()

    

    // const logoutUser = () => {
    //     logout()
    //     history.push('/signin')
    // }

    useEffect(() => {
        loadUser()
        getReservations()
  }, [])
    

    
    return (
        <Fragment>
            <nav className="nav-container">
                <span onClick={openNav}>&equiv;</span>
                <Link to="/">
                    <h2> Transport Services </h2>
                </Link>
                
                
                <ul>
                    
                    {(!isAuthed) ? (null) : (
                        <li><Link to="/">Home</Link></li>
                        )}

                    {(isAuthed) ? (null) : (
                        <li><Link to="/signin" >SignIn</Link></li>
                        )}
                    {(isAuthed) ? (null) : (
                        <li><Link to="/signup">SignUp</Link></li>
                        )}
                    {(!isAuthed) ? (null) : (
                        <li><Link to="/signin" onClick={logout}>SignOut</Link></li>
                        )}
                    
                    
                    
                </ul>
                
            </nav>
            <div id="mySidenav" className="sidenav">
                <Link to=''  className="closebtn" onClick={closeNav}>&times;</Link>
                <Link to="/">Home</Link>
                {(isAuthed) ? (null) : (
                        <li><Link to="/signin">Sign In</Link></li>
                        )}
                    {(isAuthed) ? (null) : (
                        <li><Link to="/signup">Sign Up</Link></li>
                        )}
                    {(!isAuthed) ? (null) : (
                        <li><Link to="/signin"onClick={logout} >SignOut</Link></li>
                        )}
                
            </div>
        </Fragment>
    )
}

export default Header
