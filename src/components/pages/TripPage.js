/* eslint-disable no-mixed-operators */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useContext, useEffect, useState } from 'react'
import { TripGlobalContext } from '../../context/tripContext/TripsState'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'
import Spinner from '../layouts/Spinner'
import { UserGlobalContext } from '../../context/userContext/UserState'

const TripPage = ({ match }) => {

    const context = useContext(TripGlobalContext)
    const context2 = useContext(UserGlobalContext)
    const { getTripById, trip } = context
    const {isAuthed,addReservation } = context2
    useEffect(() => {
       getTripById(match.params.id)
    }, [])
    const [ticketsNumber, setTicketNumber] = useState(0)

    while (trip === null) {
        return <Spinner/>
    }

    var totalPrice = trip.price * Number.parseInt(ticketsNumber)
    
    const onChangeHandler = (e) => {
        setTicketNumber(e.target.value)
    }
    const buyHandler = () => {
        var info = {
            trip_id: trip.id.toString(),
            number_seats: Number.parseInt(ticketsNumber),
            total: Number.parseInt(totalPrice)
        }
        // console.log(info);
        addReservation(info)
    }

    return (
        <div>
            <Navbar />
            <br />
            <div>
                <h2>{trip.name} 🚌 </h2>
                <br />
                <div className="from-to-container">
                    <div>
                        <h3>From:</h3>
                        <div className='big-from-to'><h1>{trip.from}</h1></div>
                    </div>
                    
                    <div>
                        <h3>To:</h3>
                        <div className='big-from-to'><h1>{trip.to}</h1></div>
                    </div>
                    
                </div>
            </div>
            <br />
            <div className="table-container">
                <h1> Trip information </h1>
                <br />
                <table style={{ color: 'rgb(32, 141, 184)' }}>
                    
                    <tbody>
                        <tr><td>Ticket Price</td><td>{trip.price} 💷  </td></tr>
                        <tr><td>Take off time</td><td>{trip.take_off_time} ⌚ </td></tr>
                        <tr><td>Arrival time</td><td>{trip.arrival_time} ⌚ </td></tr>
                        <tr><td>Remaining Seats</td><td>{trip.number_sites} 💺 </td></tr>
                        <tr><td>Take off date</td><td>{trip.take_off_date} 📅 </td></tr>
                        <tr><td>Arrival date</td><td>{trip.arrival_date} 📅 </td></tr>
                        <tr><td>Company</td><td style={{
                            cursor: 'pointer',
                            textDecoration: 'underline'
                        }} onClick={() => { document.getElementById("company-details").hidden = false }}>{trip.company.name} 🏢 </td></tr>
                    </tbody>
                </table>
            </div>
            <br />
            <h1>Book Your tickets  🎫 </h1>
            <br />
            {isAuthed?(<><div className="ticket-calc">
                <h3>{trip.price} 💷  ✖  </h3>
                
                <input type="number" onChange={onChangeHandler} min={0} max={trip.number_sites} value={ticketsNumber} />
                <h3> = {totalPrice}  💷 </h3>
                
            </div>
            <br />
            <button className="buy-btn" disabled={trip.number_sites>=ticketsNumber>0?(false):(true)} onClick={buyHandler}>Buy 🎫 </button>
            <br /></>):(<h2>You need to sign in to make this action available 😓 </h2>)}
            
            <br />
            <div id="company-details" hidden={true}>
                <h2>Company Details</h2>
                <h3>Company's name : {trip.company.name}</h3>
                <br />
                <h3>Company's email : {trip.company.email}</h3>
                <br />
                <button
                    style={{background:'none',border:'none',cursor:'pointer',textDecoration: 'underline'}}
                    onClick={() => {
                    document.getElementById("company-details").hidden = true
                }}>Hide Company's Details</button>
            </div>
            <br />
            <Footer/>
        </div>
    )
}

export default TripPage
