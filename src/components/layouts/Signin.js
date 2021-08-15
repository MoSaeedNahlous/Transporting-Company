/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { UserGlobalContext } from '../../context/userContext/UserState'

const Signin = () => {

    const [state, setstate] = useState({ email: '', password: '' })
    const onChangeHandler = (e) => {
        setstate({...state,[e.target.name]:e.target.value})
    }
    const History = useHistory()
    const context = useContext(UserGlobalContext)
    const {signin,isAuthed,signedup,removeSignedUp }=context
    useEffect(() => {

        if (isAuthed) {
            History.push('/')
        }
    }, [isAuthed])

    useEffect(() => {
        removeSignedUp()
    }, [])
    const onSubmitHandler = (e) => {
        e.preventDefault();
        signin(state)
        // eslint-disable-next-line no-unused-vars
        var x = document.getElementById('signin-form')
    }
    return (
        <div>
            <form id="signin-form"
                 onSubmit={onSubmitHandler}
            >
                <h1>Sign In</h1>


                <div>
                    <label>Email</label>
                    <input type="email" name="email"
                         onChange={onChangeHandler}
                        required />
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name="password"
                        onChange={onChangeHandler}
                        required />
                </div>

                <div>
                    <button type="submit">Sign In</button>
                </div>
                <div>
                    <p>Don't have an account? <Link to="/signup"> <span className="here">sign up here</span> </Link> </p>
                </div>
            </form>
        </div>
    )
}

export default Signin
