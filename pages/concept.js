import Image from 'next/image'

import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json())

function Concept() {
  const { data, error } = useSWR(
    'https://tgxnikermlhtifnztllogd4guy0avfhm.lambda-url.eu-central-1.on.aws/image/concept',
    fetcher
  )

  if (error)
    return (
      <div
        className='d-flex align-items-center justify-content-center'
        style={{ height: '500px' }}
      >
        <h3>Failed to Load</h3>
      </div>
    )
  if (!data)
    return (
      <div
        className='d-flex align-items-center justify-content-center'
        style={{ height: '500px' }}
      >
        <div className='spinner-border' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    )

  return (
    <section id='galerija' style={{ paddingTop: '100px' }}>
      <div className='container'>
        <div className='row'>
          <div className='gallery' id='concept'>
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

export default Concept
