import React from 'react'
import Moment from 'react-moment';

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div className='container'>
          <div className='top-footer-row'>
            <div className='email-and-socials'>
              <div className='section email'>
              <span className="divider-text">contact</span>
                <h1 className='email-header-one'>Your story captured by me</h1>
                <p className='contact-paragraph'>Are you interested in me capturing your story?</p>
                <a href='mailto:kanejansen@hotmail.nl'>Let's work together! &#x279E;</a>
              </div>
              {/* <div className='section socials'>
                <ul>
                  <li>Instagram</li>
                  <li>Facebook</li>
                  <li>LnikedIn</li>
                </ul>
              </div> */}
            </div>
            <div className='footer-navigation'></div>
          </div>


          <div className='bottom-footer-row'>
            <div className='copyright'>© copyright Kane Jansen</div>

            <div className="local-time"><Moment interval={60000} format="LT" /></div>
            <div className='made-by'>made by <a href='https://www.mickwaanders.dev' rel="noreferrer noopener" target="_blank">mick waanders</a></div>
          </div>

        </div>
      </div>

    </footer>
  )
}

export default Footer