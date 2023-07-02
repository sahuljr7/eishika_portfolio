import React from 'react'
import './About.css'
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined'
import Heading from './Heading'
import { Element } from 'react-scroll'

function About() {
  const skill = (technology) => (
    <div className='about__skill'>
      <ArrowRightOutlinedIcon />
      <p>{technology}</p>
    </div>
  )

  return (
    <Element id='/about'>
      <div className='about'>
        <Heading section='01.' title='About Me' />
        <div className='about__info'>
          <div className='about__left'>
            <p>
              Hello! I'm Eishika Raj. I am a very enthusiastic and optimistic person, with clear mindset and zeal of learning new things in life.{' '}
              <br />
              <br /> I enjoy creating things that live on the internet, whether
              that be websites, applications, or anything in between. I am a very ambitious web developer looking for a role in established IT company with the opportunity to work with the latest technologies on challenging and diverse projects. <br />
              <br />
              Currently I am doing my graduation from{' '}
              <a href='https://www.cuchd.in/'>Chandigarh University</a>.
              <br />
              Here are a few technologies I've been working with recently:
            </p>
            <div className='about__skills'>
              <div className='about__skillsRow'>
                {skill('C')}
                {skill('C++')}
                {skill('Python')}
                {skill('HTML')}
                {skill('CSS')}
                {skill('JavaScript')}
                {skill('SQL')}
                {skill('PHP')}
              </div>
            </div>
          </div>
          <div className='about__right'>
            <img
              src='https://images.unsplash.com/photo-1608848941236-55f915f782d7?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
              alt=''
            />
            <div className='about__image--border'></div>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default About
