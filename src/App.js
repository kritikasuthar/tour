import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddCityForm from './components/AddCity';
import Slider from 'react-slick';
import Header from './components/Header/Header';
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/Home';
import CityList from './components/CityList';
import Navbar from './components/Navbar';
import PlaceList from './components/PlaceList';
import AddPlace from './components/AddPlace';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-city" element={<AddCityForm />} />
      <Route path="/cities" element={<CityList />} />
      <Route path='/home-page' element={<Slider />} />
      <Route path="/places" element={<PlaceList />} />
      <Route path="/add-place" element={<AddPlace />} />
      <Route path="/add" element={<Navbar />} />
      <Route path='/header' element={<Header />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
};

export default App;
