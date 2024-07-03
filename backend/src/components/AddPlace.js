import React, { useState } from 'react';
import axios from 'axios';

const AddPlace = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('location', location);
 console.log(formData);


    axios.post('http://localhost:5000/api/places/add', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>Add Place</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input type="file" onChange={handleImageChange} required />
        <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
        <button type="submit">Add Place</button>
      </form>
    </div>
  );
};

export default AddPlace;
