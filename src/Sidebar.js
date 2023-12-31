import React from 'react'
import './Sidebar.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__left'>
        <div className='sidebar__icons'>
          <a href='https://github.com/EishikaRaj' target='_blank'>
            <GitHubIcon />
          </a>
          <a href='https://www.instagram.com/eishikasrivastava/' target='_blank'>
            <InstagramIcon />
          </a>
          <a href='https://www.linkedin.com/in/eishika-raj-7219631bb/' target='_blank'>
            <LinkedInIcon />
          </a>
        </div>
        {/* <div className='sidebar--vertical'></div> */}
      </div>
      <div className='sidebar__right'>
        <div className='sidebar__email'>
          <p>eishikaraj@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
