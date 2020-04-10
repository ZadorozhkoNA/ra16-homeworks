import React from 'react'; 
import PropTypes from 'prop-types'

export default function Img({src = '', alt = ''}) {
    src = src || 'http://placehold.it/250x100';
    return (
        <img src={src} className="card-img-top" alt={alt}/>
    )
}

Img.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
}