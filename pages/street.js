import Image from 'next/image'

export async function getStaticProps() {
  const res = await fetch(
    'https://tgxnikermlhtifnztllogd4guy0avfhm.lambda-url.eu-central-1.on.aws/image/street'
  )
  const data = await res.json()
  return { props: { data } }
}

function Street({ data }) {
  return (
    <section id='galerija' style={{ paddingTop: '100px' }}>
      <div className='container'>
        <div className='row'>
          <div className='gallery' id='street'>
            {data.map(image => {
              return (
                <div className='mb-3' key={image.slug} id={image.slug}>
                  <a
                    href={image.name}
                    data-toggle='lightbox'
                    data-gallery='example-gallery'
                    className='col-sm-4'
                  >
                    <Image
                      className='img-fluid'
                      src={image.name}
                      width={800}
                      height={800}
                      alt='psyart 23'
                      loading='lazy'
                    />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Street
