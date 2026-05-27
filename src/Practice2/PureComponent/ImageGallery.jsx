import React from 'react'

function ImageGallery() {
    let images = [
        'https://picsum.photos/2000?1',
        'https://picsum.photos/2000?2',
        'https://picsum.photos/2000?3',
        'https://picsum.photos/2000?4',
    ]
  return (
    <div>
        <h2>Image Gallery</h2>
        {images.map((img,index)=>(
            <img src={img} alt="gallery" key={index} loading='lazy' 
            width='200' height={200} style={{display:'block',margin:'10px'}}/>
        ))}
    </div>
  )
}

export default ImageGallery