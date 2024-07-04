const Place = require('../models/Place'); // Assuming you have a Place model

const getPlaces = async (req, res) => {
    try {
        const places = await Place.find();
        res.json(places);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching places' });
    }
};

const addPlace = async (req, res) => {
    try {
        const { name, description } = req.body;
        const newPlace = new Place({ name, description });
        const savedPlace = await newPlace.save();
        res.json(savedPlace);
    } catch (error) {
        res.status(500).json({ message: 'Error adding place' });
    }
};

const updatePlace = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        const updatedPlace = await Place.findByIdAndUpdate(id, { name, description }, { new: true });
        res.json(updatedPlace);
    } catch (error) {
        res.status(500).json({ message: 'Error updating place' });
    }
};

const deletePlace = async (req, res) => {
    try {
        const { id } = req.params;
        await Place.findByIdAndDelete(id);
        res.json({ message: 'Place deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting place' });
    }
};

module.exports = {
    getPlaces,
    addPlace,
    updatePlace,
    deletePlace
};
