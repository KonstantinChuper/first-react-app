import React from "react";
import AppleLogo from "../../assets/AppleLogo.svg";
import GoogleLogo from "../../assets/GoogleLogo.svg";
import XLogo from "../../assets/XLogo.svg";
import SpotifyLogo from "../../assets/SpotifyLogo.svg";

export default function SpotifyLogin() {
  return (
    <div className="spotify-logo-container">
      <a href="#" className="spotify-logo">
        <img src={SpotifyLogo} alt="SpotifyLogo" />
      </a>
      <h1 className="spotify-header">LIFE IS WASTED ON THE LIVING</h1>
      <p className="spotify-text">
        Sign in <br /> with
      </p>
      <div className="spotify-links-container">
        <a className="spotify-link" href="#">
          <img src={AppleLogo} alt="" />
        </a>
        <a className="spotify-link" href="#">
          <img src={GoogleLogo} alt="" />
        </a>
        <a className="spotify-link" href="#">
          <img src={XLogo} alt="" />
        </a>
      </div>
    </div>
  );
}
