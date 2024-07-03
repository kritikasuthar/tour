import React, { useState } from 'react';
import axios from 'axios';
import './AddCityForm.css';

const AddCityForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    briefDescription: '',
    description: '',
    images: ['', '', '', '', ''],
    rating: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (index, e) => {
    const newImages = [...formData.images];
    newImages[index] = e.target.value;
    setFormData({ ...formData, images: newImages });
  };
  const handleRatingChange = (rating) => {
    setFormData({ ...formData, rating });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/cities/add', formData);
      console.log(res.data);
      // Reset form on successful submission
      setFormData({
        name: '',
        briefDescription: '',
        description: '',
        images: ['', '', '', '', ''],
        rating: 0,
      });
      alert('City added successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to add city.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-city-form">
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Brief Description:</label>
        <input type="text" name="briefDescription" value={formData.briefDescription} onChange={handleChange} required />
      </div>
      <div>
        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required />
      </div>
      <div>
        <label>Images:</label>
        <br/>
        {formData.images.map((img, index) => (
          <input
            key={index}
            type="file"
            placeholder={`Image URL ${index + 1}`}
            value={img}
            onChange={(e) => handleImageChange(index, e)}
          />
        ))}
      </div>
      <label>Rating:</label>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '5px' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} style={{ cursor: 'pointer', fontSize: '24px', color: formData.rating >= star ? '#ffc107' : '#e4e5e9' }} onClick={() => handleRatingChange(star)}>
                ★
              </span>
            ))}
      </div>
      <button type="submit">Add City</button>
    </form>
  );
};

export default AddCityForm;
