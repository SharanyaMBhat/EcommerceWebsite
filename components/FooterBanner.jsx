import React, {useState, useEffect} from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'
const FooterBanner = ({footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, buttonText, product, image, desc }}) => {
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
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>

        <div className='right'>
        <p>{smallText}</p>
        <h3>{midText}</h3>
        <p>{desc}</p>

        <Link href={`/`}>
          <button type='button'>{buttonText}</button>
        </Link>
       </div>

{activeMenu && (
       <img
          src={urlFor(image)}
          className='footer-banner-image'
          />
          )}
      </div>

    </div>
  )
}

export default FooterBanner