import axios from "axios";
import React, { useEffect, useState } from "react";
import kittyIcon from '../assets/pink-hello-kitty-icon.png';

export default function CatImage() {
  const URL_API = "https://api.thecatapi.com/v1/images/search";
  const [data, setData] = useState(null);

  async function fetchData() {
    try {
      const response = await axios.get(URL_API);
      setData(response.data[0].url);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <img className="kittyIcon" src={kittyIcon} alt="kitty" />
      <div className="kitty-container">
        {data ? (
          <img className="mainImg" src={data} alt="Random cat" />
        ) : (
          <div className="loadingScreen">
            <img className="kittyIcon" src={kittyIcon} alt="kitty" />
            <p>Loading Kitty...</p>
          </div>
        )}
        <button onClick={fetchData}>New Kitty</button>
      </div>
      <img className="kittyIcon" src={kittyIcon} alt="kitty" />
    </div>
  );
}
