import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminHome from './pages/AdminHome'; // Ensure the path is correct

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AdminHome />} />
            </Routes>
        </Router>
    );
};
export default App;
