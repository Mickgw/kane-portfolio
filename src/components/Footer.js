import React from 'react'

const Footer = () => {
  function timer() {
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    if (minutes < 10) {
      minutes = "0" + minutes
    }
    var t_str = hours + ":" + minutes;
    if (hours > 11) {
      t_str += " PM";
    } else {
      t_str += " AM";
    }

    setTimeout(timer, 1000)
    return t_str;
  }

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;


  return (
    <footer>
      <div className='footer'>
        <div className='container'>
          <div className='email-and-socials'>
            <div className='section email'>
              <a href='mailto:kanejansen@gmail.com'>kanejansen@gmail.com</a>
            </div>
            <div className='section socials'>
              <ul>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>LnikedIn</li>
              </ul>
            </div>
          </div>

          <div className='bottom-footer-row'>
            <div className='copyright'>© copyright Kane Jansen</div>
            <div className="local-time">{timer() + " " + timezone}</div>
            <div className='made-by'>made by <a href='https://www.mickwaanders.dev' rel="noreferrer noopener" target="_blank">mick waanders</a></div>
          </div>

        </div>
      </div>

    </footer>
  )
}

export default Footer