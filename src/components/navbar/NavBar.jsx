import logo from '../../assets/images/logo.png'

import './navbar.css'

export const NavBar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-light shadow-sm '>
        <div className='container-fluid'>
          <img className='navbar-brand ms-2 ' src={logo} alt='' />
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0 ms-5 d-flex justify-content-between  w-100'>
              <div className='d-flex'>
                <li className='nav-item'>
                  <a
                    className='nav-link active fw-bold fs-3 color'
                    aria-current='page'
                    href='/'
                  >
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link fs-5 mt-2 color' href='/'>
                    HOT DEALS
                  </a>
                </li>
              </div>
              <div className='d-flex  me-5 '>
                <li className='nav-item'>
                  <a className='nav-link fs-5 mt-2 color pe-5 fw-bold' href='/'>
                    language
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link fs-5 mt-2 sign_up  fw-bold fs-5 px-3' href='/'>
                    sign up
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link fs-5 mt-2 shared_btn text-white px-3 '
                    href='/'
                  >
                    sign in
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
