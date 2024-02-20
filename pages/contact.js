/* eslint-disable react/no-unescaped-entities */

import Link from 'next/link'

function Contact() {
  return (
    <section id='biografija' style={{ paddingTop: '120px' }}>
      <div className='container'>
        <div className='row justify-content-center'>
          <div
            className='col-md-8 bio-img'
            style={{
              borderRight: '1.5px solid black',
              borderLeft: '1.5px solid black',
            }}
          >
            <div className='embed-responsive embed-responsive-4by3'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11323.107982024236!2d20.4382177134891!3d44.80573321143229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a70003700d4c1%3A0x578f22ce21383eb0!2sBelgrade%20Waterfront%2C%20Belgrade!5e0!3m2!1sen!2srs!4v1701947096817!5m2!1sen!2srs'
                width='600'
                height='450'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
            <div className='bio text-justify text-light pt-4 mb-5'>
              <p className='contact'>
                For more information about photos, the price of prints or how
                you can get photos in full resolution, feel free to contact us
                via <Link href='mailto:psyhoprogramer@gmail.com'>email</Link> or{' '}
                <Link
                  href='https://www.instagram.com/psyart_23/'
                  target='blank'
                >
                  Instagram.
                </Link>{' '}
                You will receive an answer to all questions within 24 hours at
                the latest.
              </p>
              <p>
                If you want to have access to exclusive uncensored content,
                contact us and we'll send you a code to sign up with. The
                uncensored content refers to uncensored photos and short videos
                of girls, something like Onlyfans and is regularly updated. In
                this way, you will have access to original and quality content
                that is not available anywhere else on the Internet.
              </p>
              <p className='text-right font-weight-bold'>Team PsyArt 23</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
