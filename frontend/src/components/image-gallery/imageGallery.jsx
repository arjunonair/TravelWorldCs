
import React from 'react'
import Masonry,{ ResponsiveMasonry} from 'react-responsive-masonry'
import galleryImages from './galleryImages'
import './img-gallery.css'

const ImageGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1, 768:3, 992:4}}>
        <Masonry gutter='1rem'>
            {
                galleryImages.map((item,index)=>
                <img className='gallery__img' src={item} key={index} alt=''/>
                )
            }
        </Masonry>

    </ResponsiveMasonry>
  )
}

export default ImageGallery