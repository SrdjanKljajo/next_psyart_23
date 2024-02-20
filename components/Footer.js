import Link from 'next/link'

function Footer() {
  return (
    <footer
      className='pb-5 pt-5 mt-5'
      style={{ backgroundColor: 'whitesmoke' }}
    >
      <div className='container-fluid text-center'>
        <div className='row pt-3 pb-4'>
          <div className='col-md-4 footer-icon'>
            <Link href='https://www.instagram.com/psyart_23/' target='blank'>
              <i className='fa fa-instagram'></i>
            </Link>
          </div>
          <div className='col-md-4 pt-3'>
            <p>© srdjan kljajevic - 2024</p>
          </div>
          <div className='col-md-4'>
            <div>
              <div>
                <i className='fa fa-envelope-o'></i>
                <p className='pt-3 email'>
                  <Link href='mailto:psyhoprogramer@gmail.com'>
                    psyhoprogramer@gmail.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='pt-3 float-right pr-3'>
        <Link href='#' className='text-dark' style={{ textDecoration: 'none' }}>
          <i className='fa fa-arrow-up'></i>
        </Link>
      </p>
    </footer>
  )
}

export default Footer
