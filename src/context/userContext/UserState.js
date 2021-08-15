/* eslint-disable no-unused-vars */
import React, { createContext, useReducer } from 'react'
import UserReducer from './UserReducer';
import axios from 'axios'
import { useHistory } from 'react-router-dom';


//متحولات نريد اتاحتها من قبل السياق الخاص بالمقالات
const intialState = {user:null,isAuthed:false,signedup:false,reservations:null,reservation:null}
// تصريح السياق
export const UserGlobalContext = createContext(intialState);
// تصريح مزود السياق و التي وظيفته جعل المتحولات في الأعلى متاحة لكل المشروع
export const UserGlobalProvider = ({ children }) => {

    
    const [state, dispatch] = useReducer(
         UserReducer
        , intialState)
    
    const signin = (info) => {
        axios.post('http://travigo.alifouad91.com/api/auth/login', info).then(
            (res) => {
                localStorage.setItem('token',res.data.access_token.original.access_token);
                dispatch({
                    type: 'SIGN_IN',
                    payload:res.data.user
                })
            }
        ).catch((err) => {
            alert('Worng information! check again...')
            dispatch({
                    type: 'AUTH_ERROR',
                })
            throw err;
            
        })
    }
    const signup = (info) => {
        axios.post('http://travigo.alifouad91.com/api/auth/register', info).then(
            (res) => {
                alert("Success!! Navigate to Sign in page to use Your Account!")
                dispatch({
                    type:'signed'
                })
            }
        ).catch((err) => {
            if(err.response)
            if (err.response.data.email) {
                alert(err.response.data.email[0])
            }

            // alert(err.response.data.email[0],err.response.data.password[0]);
            throw err
        })
    }
    const removeSignedUp = () => {
        dispatch({
            type:'removeSignedUp'
        })
    }
    const loadUser =  () => {
        axios.get('http://travigo.alifouad91.com/api/auth/user',{
                headers:{
                        "Authorization": 'Bearer ' +localStorage.getItem('token'),
						"Accept":"application/json",
                        "Content-Type": "application/json",
						}
            }).then(
            (res) => {
                dispatch({
                    type: 'LOAD_USER',
                    payload: res.data
                })
            })
    }
            
    
    const logout =  () => {
        axios.get('http://travigo.alifouad91.com/api/auth/logout',{
                headers:{
                        "Authorization": 'Bearer ' +localStorage.getItem('token'),
						"Accept":"application/json",
						"Content-Type":"application/json"
						}
            }).then(
            (res) => {
                localStorage.removeItem('token')
                    dispatch({
                    
                    type: 'LOG_OUT',
                })
        }
        ).catch(
            (err) => {
                
            }

        )
        
         
    };
    const addReservation = (info) => {
        axios.post('http://travigo.alifouad91.com/api/reservations',info,{
                headers:{
                        "Authorization": 'Bearer ' +localStorage.getItem('token'),
						"Accept":"application/json",
						"Content-Type":"application/json"
						}
            }).then(
            res => {
                // dispatch({
                //     type: 'Add_RES',
                //     payload: res.data.data
                // })
                alert('Success!!')
            }
        ).catch((err) => {
            alert(err.response.data);
            // console.log(err);
        })
    }

    const getReservations = () => {
        axios.get('http://travigo.alifouad91.com/api/user/reservations',{
                headers:{
                        "Authorization": 'Bearer ' +localStorage.getItem('token'),
						"Accept":"application/json",
						"Content-Type":"application/json"
						}
            }).then(
            res => {
                dispatch({
                    type: 'GET_RES',
                    payload: res.data.data
                })
            }
        ).catch()
    }
    const getReservationById = (id) => {
        axios.get(`http://travigo.alifouad91.com/api/reservations/${id}`,{
                headers:{
                        // "Authorization": 'Bearer ' +localStorage.getItem('token'),
						"Accept":"application/json",
						"Content-Type":"application/json"
						}
            }).then(
            res => {
                dispatch({
                    type: 'GET_RES_BY_ID',
                    payload: res.data
                })
            }
        ).catch(err => {
            throw err;
        })
    }






    return (<UserGlobalContext.Provider
        value={{
            user: state.user,
            isAuthed: state.isAuthed,
            reservations: state.reservations,
            reservation:state.reservation,
            signin,
            loadUser,
            logout,
            signup,
            removeSignedUp,
            getReservations,
            addReservation,
            getReservationById
 
        }}
    >
        {children}


            </UserGlobalContext.Provider>)


}


