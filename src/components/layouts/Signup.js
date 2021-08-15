/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { UserGlobalContext } from '../../context/userContext/UserState'


const Signup = () => {
    const context = useContext(UserGlobalContext)
    const { isAuthed,signup,signedup } =context
    const history = useHistory()
    useEffect(() => {
         if (isAuthed) {
      history.push('/');
    }
    }, [isAuthed])
    useEffect(() => {
        if (signedup) {
            history.push('/signin');
        }
    }, [signedup])


    
    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    })
    

    
    const onChangeHandler = (e) => { 
        setState({...state,[e.target.name]:e.target.value})
    }
    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (state.password !== state.password_confirmation) {
            alert("check your passwords!")
        } else {
            
            signup(state);
            // alert("Success!! redirecting to Sign In page..")
            // history.push('/signin');
            document.getElementById('signup-form').reset()
            }
        }
    
    return (
        <div>
            <form id="signup-form"
                 onSubmit={onSubmitHandler}
            >
                <h1>Sign Up</h1>

                <div>
                    <label>Name</label>  
                    <input type="text" name="name" placeholder="Name"
                         onChange={onChangeHandler}
                        required />
                </div>

                

                <div>
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Email"
                         onChange={onChangeHandler}
                        required />
                </div>
                
                <div>
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password"
                         onChange={onChangeHandler}
                        minLength="8" required />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" name="password_confirmation" placeholder="Password Confirmation"
                         onChange={onChangeHandler}
                        minLength="8" required />
                </div>
                <br />
                <div>

                </div>
                <div>
                    <button type="submit">Sign Up</button>
                </div>

                <div>
                    <p>already got an account? <Link to="/signin"> <span className="here">sign in here</span> </Link> </p>
                </div>

            </form>
        </div>
    )
}


export default Signup
