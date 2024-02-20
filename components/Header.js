'use client'

import { useRouter } from 'next/router'
import Link from 'next/link'

function Header() {
  const router = useRouter()
  const currentRoute = router.pathname

  return (
    <nav className='navbar navbar-expand-lg sticky-top navbar-light bg-light pl-2 pr-2 nav-page-galery'>
      <h5 className='text-dark logo pl-2 py-4'>
        <Link href='/'>PsyArt 23</Link>
      </h5>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon bg-light'></span>
      </button>
      <div
        className='collapse navbar-collapse justify-content-end'
        id='navbarNav'
      >
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link
              className={currentRoute === '/' ? 'nav-link active' : 'nav-link'}
              href='/'
            >
              <i className='fa fa-home' style={{ fontSize: '1.3em' }}></i>
              <span className='sr-only'>(current)</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className={
                currentRoute === '/contact' ? 'nav-link active' : 'nav-link'
              }
              href='/contact'
            >
              CONTACT
            </Link>
          </li>
          <li className='nav-item dropdown'>
            <Link
              className='nav-link dropdown-toggle'
              href='#'
              role='button'
              data-toggle='dropdown'
              aria-expanded='false'
            >
              GALERY
            </Link>
            <div className='dropdown-menu'>
              <Link
                className={
                  currentRoute === '/nude'
                    ? 'dropdown-item active'
                    : 'dropdown-item'
                }
                href='/nude'
              >
                Nude
              </Link>
              <div className='dropdown-divider'></div>
              <Link
                className={
                  currentRoute === '/abstract'
                    ? 'dropdown-item active'
                    : 'dropdown-item'
                }
                href='/abstract'
              >
                Abstract
              </Link>
              <div className='dropdown-divider'></div>
              <Link
                className={
                  currentRoute === '/concept'
                    ? 'dropdown-item active'
                    : 'dropdown-item'
                }
                href='/concept'
              >
                Conceptual
              </Link>
              <div className='dropdown-divider'></div>
              <Link
                className={
                  currentRoute === '/street'
                    ? 'dropdown-item active'
                    : 'dropdown-item'
                }
                href='/street'
              >
                Street
              </Link>
            </div>
          </li>
          <li className='nav-item exclusive'>
            <Link
              className={
                currentRoute === '/exclusive'
                  ? 'nav-link exclusive'
                  : 'nav-link'
              }
              href='/exclusive'
            >
              UNCENSORED
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
