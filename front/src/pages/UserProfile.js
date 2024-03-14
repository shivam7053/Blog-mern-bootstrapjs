// src/pages/UserProfile.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // For extracting user ID
import axios from 'axios';

const UserProfile = () => {
  const { userId } = useParams(); // Extract user ID from URL
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error.message);
      }
    };

    fetchUser();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Other user-related information */}
    </div>
  );
};

export default UserProfile;
