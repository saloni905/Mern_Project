import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from './../pages/Home';
import Tours from './../pages/Tours';
import TourDetails from './../pages/TourDetails';
import SearchReasultList from './../pages/SearchReasultList';
import Register from './../pages/Register';
import Login from './../pages/Login';
import ThankYou from './../pages/ThankYou';
import Payment from './../pages/Payment';

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/home"/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/tours" element={<Tours/>}/>
        <Route path="/tours/:id" element={<TourDetails/>}/>
        <Route path="/tours/search" element={<SearchReasultList/>}/>
        <Route path="/register" element={< Register/>}/>
        <Route path="/thank-you" element={<ThankYou/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/payment" element={<Payment/>}/>
    </Routes>
  )
}

export default Routers
