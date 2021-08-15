/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import { TripGlobalContext } from '../../context/tripContext/TripsState'
import { Link } from 'react-router-dom'
import Spinner from '../layouts/Spinner'

const TripsPage = () => {
    const context = useContext(TripGlobalContext)
    const { trips,getTrips } = context
    useEffect(() => {
        getTrips();
    }, [])
    while (trips === null) {
        return <Spinner/>
    }
    return (
        <div>
            <Navbar/>
            
            <div style={{paddingTop:'8%'}} >
            <h2 style={{fontSize:'28px'}}>Trips</h2>
        <div className="articles-grid-container" data-aos="fade-left" data-aos-duration="2000">
            {
                    trips === [] ? (<h2>No Tripss to be found..</h2>) : (
                        trips.map((trip) => {
                            return (
                            <div key={trip.id} className="article-main-container">
                                        
                <h3>{trip.name}</h3>
                <br />
                <span><h3><span style={{fontWeight:'100'}}>From : </span>{trip.from}</h3></span><h3><span style={{fontWeight:'100'}}>To : </span>{trip.to}</h3>
                <br/>
                <h5>Ticket price: 💷 {trip.price} <span style={{ fontWeight: 'bolder' }}> </span></h5>
                <br />
                <div style={{display:'flex',justifyContent:'center'}}>
                                        <button className="read-more">
                                            <Link to={`/trip/${trip.id}`}>More Details..</Link>
                                        </button>
                </div>
                
                
            </div>
        
                                
                            )
                        }   
                        )
                    )
                    }
                </div>
            </div>
            <br />
            <Footer/>
        </div>
    )
}

export default TripsPage
