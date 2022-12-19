import React from 'react'
import footerLogo from '../../assets/images/footer img.png'
import './footer.css'

export const Footer = () => {
  return (
    <>
      <div className='footer_wrapper text-center'>
        <div className=''>
          <a
            href='https://maroof.sa/178825'
            target='_blank'
            rel='noreferrer '
            className=''
          >
            <img src={footerLogo} alt='ma3rof logo' className=' m-0 p-0' />
          </a>
          <p className='text-white  fs-5 px-2 mt-3 d-inline '>
            © 2020 ALGYM All Rights Reserved.Developed by
            <a
              href='https://inovaeg.com/'
              target='_blank'
              className='text-white fs-5 px-1'
            >
              INOVA LLC
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
