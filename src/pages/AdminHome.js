import React from 'react';

const AdminHome = () => {
    return (
        <div>
            <h1>Rajasthan Tourism Admin Panel</h1>
            <ul>
                <li><a href="/manage-places">Manage Places</a></li>
                <li><a href="/manage-users">Manage Users</a></li>
                <li><a href="/manage-bookings">Manage Bookings</a></li>
            </ul>
        </div>
    );
};

export default AdminHome;
