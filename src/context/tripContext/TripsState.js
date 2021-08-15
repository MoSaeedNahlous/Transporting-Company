import React, { createContext, useReducer } from 'react'
import TripsReducer from './TripsReducer';
import axios from 'axios'


//متحولات نريد اتاحتها من قبل السياق الخاص بالمقالات
const intialState = {trips:null,trip:null}
// تصريح السياق
export const TripGlobalContext = createContext(intialState);
// تصريح مزود السياق و التي وظيفته جعل المتحولات في الأعلى متاحة لكل المشروع
export const TripGlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(
         TripsReducer
        , intialState)
    
    

    const getTrips = () => {
        axios.get('http://travigo.alifouad91.com/api/trips').then(
            (res) => {
                dispatch({
                    type: 'GET_TRIPS',
                    payload:res.data
                })
            }
        ).catch(
            (err) => {
                throw err;
            }
        )
    }

    const getTripById = (tripId) => {
        axios.post('http://travigo.alifouad91.com/api/trips/show', { id: tripId }).then(
            (res) => {
                dispatch({
                    type:'GET_TRIP_BY_ID',
                    payload:res.data
                })  
            }
        ).catch(
            (err) => {
             throw err;
            }
        )
    }
    
    
    


    
    
// الميثودات التي ستتاح أيضا لكل المشروع
    // const AddArticle = (articleData) => {
    //     axios.post('https://medicasvu.herokuapp.com/api/article/save', articleData, {
    //         headers: {
    //         "x-access-token":localStorage.getItem('jwtToken')
    //         }
    //     }
    //     ).then((res) => {
    //         // طريقة التفاعل بين القيمة المرجعة للميثود وبين السياق
    //         // بمساعدة ملف Reducer
    //         dispatch({
    //             type: 'ADD_ARTICLE',
    //             payload:res.data
    //         })
    //     }).catch((err) => {
    //         throw err
    //     })
    // }

    // const incViews = (id) => {
    //     axios.get(`https://medicasvu.herokuapp.com/api/article/incViews/${id}`)
    // }

    // const GetAllArticles = () => {
    //     axios.get('https://medicasvu.herokuapp.com/api/article/findAll').then((res) => {
    //         dispatch({
    //             type: 'GET_ALL_ARTICLES',
    //             //check if payload is res or res.data
    //             payload:res.data
                
    //         })
    //     }).catch((err) => {
    //         throw err
    //     })
    // }

    // const GetArticleById = (articleId) => {
    //     axios.get(`https://medicasvu.herokuapp.com/api/article/findById/${articleId}`).then((res) => {
    //         console.log(res.data);
    //         dispatch({
    //             type: 'GET_ARTICLE_BY_ID',
    //             payload:res.data
    //         })
    //     }).catch((err) => {
    //         throw err
    //     })
    // }

    // const CountArticles = () => {
    //     axios.get('https://medicasvu.herokuapp.com/api/article/count').then(res => {
    //         dispatch({
    //             type: 'GET_ARTICLES_COUNT',
    //             payload:res.data
    //         })
    //     }).catch((err) => {
    //         throw err
    //     })
    // }

    // const DeleteArticleById = (articleId) => {
    //     axios.delete(`https://medicasvu.herokuapp.com/api/article/deleteById/${articleId}`, {
    //         headers: {
    //         "x-access-token":localStorage.getItem('jwtToken')
    //         }
    //     }).then((res) => {
    //         dispatch({
    //             type: 'DELETE_ARTICLE_BY_ID',
    //             payload:res.data
    //         })
    //     }).catch((err) => {
    //         throw err
    //     })
    // }


    // const DeleteAllArticles = () => {
    //     axios.delete(`https://medicasvu.herokuapp.com/api/article/deleteAll`).then((res) => {
    //         dispatch({
    //             type: 'DELETE_ALL_ARTICLES',
    //             payload:res.data
    //         })
    //     }).catch((err) => {
    //         throw err
    //     })
    // }

    // const UpdateArticleById =(articleId,article)=>{
    //     axios.put(`https://medicasvu.herokuapp.com/api/article/update/${articleId}`,article).then(res=>{
    //         dispatch({
    //             type: 'UPDATE_ARTICLE_BY_ID',
                
    //         })
    //     }).catch((err) => {
    //         throw err
    //     })

    // }

    // const SetCurrentArticle =(article)=>{
    //     dispatch({
    //         type: 'SET_CURRENT_ARTICLE',
    //         payload:article
    //     })
    // }

    // const ClearCurrentArticle =()=>{
    //     dispatch({
    //         type: 'CLEAR_CURRENT_ARTICLE',
            
    //     })
    // }

    



    return (<TripGlobalContext.Provider
        value={{ 
            trips: state.trips,
            trip:state.trip,
            getTrips,
            getTripById
        }}
    >
        {children}


            </TripGlobalContext.Provider>)


}


