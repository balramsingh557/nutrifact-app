import React from 'react';
import twitter from '../../images/twitter.png'
import youtube from '../../images/youtube.png'
import instagram from '../../images/instagram.png'
import facebook from '../../images/facebook.png'
import './Footer.css';

export default function Footer() {
    return (
  <footer className="page-footer">
  <div className="container">
    <div className="row">
      <div className="col m6 s12">
        <h5 className="white-text">Our Branches</h5>
        <div className="grey-text text-lighten-4">
          <p>
            212 Saint Street, CA, USA
          </p>
          <p className="valign-wrapper">
            <i className="material-icons">call</i>
            <span >+1 292 304 3458</span>
          </p>
        </div>
      </div>
      <div className="col m4 offset-m2 s12 social-media-links">
        <h5 className="white-text">Links</h5>
        <ul>

          <li>
            <a className="grey-text text-lighten-3 valign-wrapper" href="#!">
              <img src={twitter}alt="icon"/> Twitter
            </a>
          </li>
          <li>
            <a className="grey-text text-lighten-3 valign-wrapper" href="#!">
              <img src={facebook} alt="icon"/> Facebook
            </a>
          </li>
          <li>
            <a className="grey-text text-lighten-3 valign-wrapper" href="#!">
              <img src={youtube} alt="icon"/> Youtube
            </a>
          </li>
          <li>
            <a className="grey-text text-lighten-3 valign-wrapper" href="#!">
              <img src={instagram} alt="icon"/> Instagram
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  </div>
  <div className="footer-copyright">
    <div className="container">
      © 2021 Copyright NutriFact
    </div>
  </div>
</footer>

    )
}
