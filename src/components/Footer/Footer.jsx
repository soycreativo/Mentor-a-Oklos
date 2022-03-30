import React from 'react'

import Facebook from '../assets/images/Facebook.svg'
import Instagram from '../assets/images/Instagram.svg'
import Youtube from '../assets/images/Insignificon-YouTube.svg'
import programate from '../assets/images/programate-academy.png'
import '../Footer/Footer.css'


const Footer = () => {
  return (
    <section className="footer">

      <section className="footer-social-media">

        <a href="https://www.facebook.com/somoseducamas" target="_blank" rel="noopener noreferrer">
          <img className="logoSocialMedia" src={Facebook} width="30px" height="30px" alt="Facebook" /></a>
        <a href="https://www.instagram.com/programate_academy/" target="_blank" rel="noopener noreferrer">
          <img className="logoSocialMedia" src={Instagram} width="30px" height="30px" alt="Instagram" /></a>
        <a href="https://www.youtube.com/channel/UCmnr_sLPZ1E8H1VgUtaHGPQ" target="_blank" rel="noopener noreferrer">
          <img className="logoSocialMedia" src={Youtube} width="30px" height="30px" alt="Youtube" /></a>
        <section className="footer-info__name">
          <img src={programate} width="200px" height="72px" alt="Programate Logo" />
        </section>
      </section>
      <div className='cont'>
      <div className='block1'></div>
       <hr />
     <div className='block2'></div>
      </div>
      
      <h5 className="rightsResercedText">
        ©Todos los derechos reservados.<br />
        Superteam de Quackcoders.
        Cundicoders.
      </h5>






    </section>
  )
}

export default Footer;

