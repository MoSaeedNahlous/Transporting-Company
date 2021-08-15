/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { UserGlobalContext } from '../../context/userContext/UserState'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'
import Spinner from '../layouts/Spinner'

const ReservationPage = ({ match }) => {
    const context = useContext(UserGlobalContext)
    const {getReservationById,reservation}= context
    useEffect(() => {
        getReservationById(match.params.id)
        
    }, [])
    while (reservation===null) {
        return <Spinner/>
    }
    return (
        <div>
            <Navbar />
            <br />
            <div className="table-container">
                <h1> Reservation information </h1>
                <br />
                <table style={{ color: 'rgb(32, 141, 184)' }}>
                    
                    <tbody>
                        <tr><td>Tickets Amount 🎫 </td><td>{reservation.number_seats} 🎫 </td></tr>
                        <tr><td>Seats Number 💺 </td><td>{reservation.ticket_numbers} 💺 </td></tr>
                        <tr><td>Ticket Price 💷 </td><td>{reservation.price} 💷 </td></tr>
                        <tr><td>Trip Name </td><td>{reservation.trip.name}</td></tr>
                        <tr><td>From 🧭 </td><td>{reservation.trip.from} 🧭 </td></tr>
                        <tr><td>To 🧭 </td><td>{reservation.trip.to} 🧭 </td></tr>
                        <tr><td>Take off time ⌚ </td><td>{reservation.trip.take_off_time} ⌚ </td></tr>
                        <tr><td>Arrival time ⌚ </td><td>{reservation.trip.arrival_time} ⌚ </td></tr>
                        <tr><td>Remaining Seats 💺 </td><td>{reservation.trip.number_sites} 💺 </td></tr>
                        <tr><td>Take off date 📅 </td><td>{reservation.trip.take_off_date} 📅 </td></tr>
                        <tr><td>Arrival date 📅 </td><td>{reservation.trip.arrival_date} 📅 </td></tr>
                    </tbody>
                </table>
            </div>
            <br />
            <Footer/>
        </div>
    )
}

export default ReservationPage
