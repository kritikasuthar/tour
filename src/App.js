import React from 'react';
import { Route, Routes} from 'react-router-dom';
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
        <Route path='/home-page' element={<Slider />}/>
        <Route path="/places" exact component={<PlaceList />} />
        <Route path="/add-place" component={<AddPlace />} />
        <Route path="/add" component={<Navbar />} />
        <Route path='/header' component={<Header/>}/>
        <Route path='/login' component={<Login/>}/>
        <Route path='/register' component={<Register/>}/>
        
      </Routes>

  );
};

export default App;