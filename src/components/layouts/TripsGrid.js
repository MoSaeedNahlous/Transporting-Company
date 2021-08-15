/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { TripGlobalContext } from '../../context/tripContext/TripsState'
import { UserGlobalContext } from '../../context/userContext/UserState'
import Spinner from '../layouts/Spinner'

const TripsGrid = () => {
    const context = useContext(TripGlobalContext)
    const context2 = useContext(UserGlobalContext)
    const { getTrips, trips } = context
    const {isAuthed,reservations} = context2
    const History=useHistory()
    useEffect(() => {
        getTrips();
    }, [])

    while (trips === null || reservations===null) {
        return <Spinner/>
    }
    

    return (
        
        <div style={{paddingTop:'8%'}} >
            <h2>Available Trips</h2>
        <div className="articles-grid-container" data-aos="fade-left" data-aos-duration="2000">
                {
                    trips === [] ? (<h2>No Tripss to be found..</h2>) : (
                        trips.slice(0, 3).map((trip) => {
                            return (
                            <div key={trip.id} className="article-main-container">
                                        
                <h3>{trip.name}</h3>
                <br />
                <span><h3><span style={{fontWeight:'100'}}>From :</span> { trip.from}</h3></span><h3><span style={{fontWeight:'100'}}>To :</span>  { trip.to}</h3>
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

            <div style={{width:'100%'}}>
                <button onClick={()=>{History.push('/trips')}} style={{padding:'2%',fontSize:'20px',borderRadius:'15px',cursor:'pointer'}} >More</button>
            </div>
            <br />



            {isAuthed?(
            <div style={{paddingTop:'8%'}} >
                    <h2>Recent Reservations</h2>
                    <br />
                    <br />
                    {
                        reservations.length === 0 ? (<h2>No recent reservations available..</h2>) : (null)}
        <div className="articles-grid-container" data-aos="fade-right" data-aos-duration="2000">
                {
                    reservations.length===0 ? (null) : (
                        reservations.slice(reservations.length-3, reservations.length).map((reservation) => {
                            return (
                            <div key={reservation.id} className="article-main-container">
                                        
                <br />
                <span><h3><span style={{fontWeight:'100'}}>From :</span> { reservation.trip.from}</h3></span><h3><span style={{fontWeight:'100'}}>To :</span>  { reservation.trip.to}</h3>
                <br />
                <span><h3><span style={{fontWeight:'100'}}>Tickets Amount 🎫 :</span> { reservation.number_seats}</h3></span>
                <br />
                                    <span><h3><span style={{ fontWeight: '100' }}>Seats Number 💺 :</span> {reservation.ticket_numbers}</h3></span>
                                    <br />
                <h5>Ticket price: 💷 {reservation.price} <span style={{ fontWeight: 'bolder' }}> </span></h5>
                                    <br />
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        
                                        <button className="read-more">
                                            <Link to={`/reservation/${reservation.id}`}>More Details..</Link>
                                        </button>
                </div>
            
                
                
            </div>
        
                                
                            )
                        }   
                        )
                    )
            }
            
            </div>

            <br />
            
        </div>):(null)}
            
        </div>
    )
}

export default TripsGrid
