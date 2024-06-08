import Axios from "axios";
import React, { useState, useEffect } from "react";

export default function UserProfile() {
  const [userData, setUserData] = useState(null);
  const API_URL = "https://randomuser.me/api/";

  async function fetchData() {
    try {
      const response = await Axios.get(API_URL);
      console.log(response);
      setUserData(response.data.results[0]);
    } catch (err) {
      console.error(`Возникла ошибка: ${err}`);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      {userData ? (
        <div className="profile-container">
          <img src={userData.picture.large} alt="Foto" />
          <h1>
            {userData.name.first} {userData.name.last}
          </h1>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={fetchData}>Show new user</button>
    </div>
  );
}
