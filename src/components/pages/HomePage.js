/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import { TripGlobalContext } from '../../context/tripContext/TripsState'
import TripsGrid from '../layouts/TripsGrid'

const HomePage = () => {
    const context = useContext(TripGlobalContext)
    const {getTrips}= context
    useEffect(() => {
        getTrips()
    }, [])
    return (
        <div>
            <Navbar/>
            <br />
            <TripsGrid />
            <br />
            <Footer/>
        </div>
    )
}

export default HomePage
