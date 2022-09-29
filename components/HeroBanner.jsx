import React , { useEffect,useState}from 'react'
import Link from 'next/link'


import { urlFor } from '../lib/client'
const HeroBanner = ({heroBanner}) => {
  const [activeMenu, setActiveMenu] = useState(true)
  const [screenSize, setScreenSize] = useState(null)

  useEffect(() => {
    const handleResize = () =>  setScreenSize(window.innerWidth)
    window.addEventListener('resize', handleResize)
    handleResize()
    return () =>  window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if(screenSize< 900) {
      setActiveMenu(false)
    }
    else {
      setActiveMenu(true)
    }
  }, [screenSize])
  
  
  return (
    <div className='hero-banner-container'> 
    <div>
      <p className='beats-solo'>{heroBanner.smallText}</p>
      <h3>{heroBanner.midText}</h3>
      <h1>{heroBanner.largeText1}</h1>
      
      {activeMenu && (<img src={urlFor(heroBanner.image )} alt="headphones" className='hero-banner-image'/>)}

      <div>
      <Link href={`/`}>
        <button type='button'>{heroBanner.buttonText}</button>
        </Link>

        <div className='desc'>
          <h5></h5>
          <p>{heroBanner.desc}</p>
        </div>
      </div>
    </div>
    
    
    </div>
  )
}

export default HeroBanner