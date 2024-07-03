import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PlaceList = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/places')
      .then(response => setPlaces(response.data))
      .catch(error => console.log(error));
  }, []);

  const deletePlace = (id) => {
    axios.delete(`http://localhost:5000/api/places/delete/${id}`)
      .then(() => setPlaces(places.filter(place => place._id !== id)))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>Places</h1>
      <ul>
        {places.map(place => (
          <li key={place._id}>
            <h2>{place.name}</h2>
            <p>{place.description}</p>
            <img src={`http://localhost:5000/${place.image}`} alt={place.name} style={{ width: '200px', height: '200px' }} />
            <p>Location: {place.location}</p>
            <button onClick={() => deletePlace(place._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaceList;
