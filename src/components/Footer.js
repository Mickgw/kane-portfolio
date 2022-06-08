import React from 'react'
import Moment from 'react-moment';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <hr className='divider' />
      <div className='footer'>
        <div className='container'>
          <div className='top-footer-row'>

            {/* <div className='section socials'>
              <div class="buttons">
                <a href="#" class="fb" title="Join us on Facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#" class="tw" title="Join us on Twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="#" class="g-plus" title="Join us on Google+"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                <a href="#" class="dribbble" title="Join us on Dribbble"><i class="fa fa-dribbble" aria-hidden="true"></i></a>
                <a href="#" class="vimeo" title="Join us on Vimeo"><i class="fa fa-vimeo" aria-hidden="true"></i></a>
                <a href="#" class="pinterest" title="Join us on Pinterest"><i class="fa fa-pinterest-p" aria-hidden="true"></i></a>
                <a href="#" class="insta" title="Join us on Instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="#" class="in" title="Join us on Linked In"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
              </div>
            </div> */}
            <div className='section navigation'>
              <ul className='footer-nav'>
                <li className='footer-nav-link'><Link to="/portfolio">Portfolio</Link></li>
                <li className='footer-nav-link'><Link to="/about">About</Link></li>
                <li className='footer-nav-link'><Link to="/motion">Motion</Link></li>
              </ul>
            </div>
            <div className='section email-socials'>
              <div className='email'>
                <span className="divider-text">contact</span>
                <h1 className='email-header-one'>Your story captured by me</h1>
                <p className='contact-paragraph'>Are you interested in me capturing your story? Feel free to reach out to me anytime</p>
                <a href='mailto:kanejansen@hotmail.nl'>Let's work together &#x279E;</a>
              </div>
              <div className='socials'>
                <div class="socialbtns"> {/* https://codepen.io/hayran/pen/RPVJJZ */}
                  <ul>
                    <li><a href="#" class="fa fa-lg fa-facebook">wef</a></li>
                    <li><a href="#" class="fa fa-lg fa-twitter">wef</a></li>
                    <li><a href="#" class="fa fa-lg fa-google-plus"></a></li>
                    <li><a href="#" class="fa fa-lg fa-github"></a></li>
                    <li><a href="#" class="fa fa-lg fa-pinterest"></a></li>
                    <li><a href="#" class="fa fa-lg fa-linkedin"></a></li>
                    <li><a href="#" class="fa fa-lg fa-instagram"></a></li>
                    <li><a href="#" class="fa fa-lg fa-youtube"></a></li>
                  </ul>
                </div>
              </div>



            </div>
          </div>


          <div className='bottom-footer-row'>
            <div className='copyright'>© copyright Kane Jansen</div>

            <div className="local-time">localtime - <Moment interval={1000} format="LT" /></div>
            <div className='made-by'>made by <a href='https://www.mickwaanders.dev' rel="noreferrer noopener" target="_blank">mick waanders</a></div>
          </div>

        </div>
      </div>

    </footer>
  )
}

export default Footer