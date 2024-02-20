import Layout from '@/components/Layout'
import '@/styles/globals.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/*<Script
        src='https://code.jquery.com/jquery-3.4.1.slim.min.js'
        integrity='sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n'
        crossOrigin='anonymous'
      />
      <Script
        src='https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js'
        integrity='sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo'
        crossOrigin='anonymous'
      />
      <Script
        src='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js'
        integrity='sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6'
        crossOrigin='anonymous'
        strategy='lazyOnload'
      />
      <Script
        src='https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.min.js'
        integrity='sha512-Y2IiVZeaBwXG1wSV7f13plqlmFOx8MdjuHyYFVoYzhyRr3nH/NMDjTBSswijzADdNzMyWNetbLMfOpIPl6Cv9g=='
        crossOrigin='anonymous'
        referrerPolicy='no-referrer'
  /> */}
      <Script
        type='text/javascript'
        src='js/lightbox.js'
        strategy='lazyOnload'
      />
      <Script
        type='text/javascript'
        src='js/disable_rk.js'
        strategy='lazyOnload'
      />
    </>
  )
}
