import React from 'react'
import { Link } from 'react-router-dom'

const TripCard = (trip) => {
    return (
        <div key={trip.id} className="article-main-container">
                                        
                <h3>{trip.name}</h3>
                <br />
                <span><h3>From:{trip.from}</h3></span><h3>To:{trip.to}</h3>
                <br/>
                <h5>Price per ticket: ${trip.price} <span style={{ fontWeight: 'bolder' }}> </span></h5>
                <br />
                <div style={{display:'flex',justifyContent:'center'}}>
                    <button className="read-more">
                        <Link to={`/trip/${trip.id}`}>More Details..</Link>
                    </button>
                </div>
                
                
            </div>
    )
}

export default TripCard
