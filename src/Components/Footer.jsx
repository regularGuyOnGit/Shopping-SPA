import React from 'react'
import '../Styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/fontawesome-free-solid'
import { faTwitter, faLinkedin, faInstagram } from '@fortawesome/fontawesome-free-brands'

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="addressSocial">
          <p>ShortKart 123 Commerce Avenue Cityville, Stateville 54321 , Aurodel.</p>
          <div>
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
        <div className="email">
          <form action="mailto:someone@example.com" method="post">
            <label htmlFor="textMsg">
              Comment : <textarea name="" id="textMsg" cols="30" rows="10"></textarea>
            </label>
            <button type="submit">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </div>
        <div className="allRights">
          Copyright © 2024 ShortKart. All rights reserved. This website and its content, including
          but not limited to text, graphics, logos, images, and software, are the property of
          ShortKart and are protected by international copyright laws. Any unauthorized use,
          reproduction, or distribution of any part of this website is strictly prohibited without
          the prior written consent of ShortKart.
        </div>
      </div>
    </>
  )
}
