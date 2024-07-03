import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CityList = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/cities');
        setCities(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCities();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/cities/${id}`);
      setCities(cities.filter(city => city._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>City List</h1>
      <ul>
        {cities.map(city => (
          <li key={city._id}>
            <h2>{city.name}</h2>
            <p>{city.briefDescription}</p>
            <button onClick={() => handleDelete(city._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityList;
