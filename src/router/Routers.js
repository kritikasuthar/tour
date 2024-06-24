import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Tours from '../pages/Tours';
import TourDetails from '../pages/TourDetails';
import Login from '../components/Login';
import Register from '../components/Register';
import SearchResultList from '../pages/SearchResultList';
import AddPlace from '../components/AddPlace';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/tours' element={<Tours />} />
        <Route path='/tours/:id' element={<TourDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/tours/search' element={<SearchResultList />} />
        <Route path='/add-place' element={<AddPlace/>}/>
        <Route path='/places' element={<PlaceList/>}/>
    </Routes>
  );
}

export default AppRoutes;


