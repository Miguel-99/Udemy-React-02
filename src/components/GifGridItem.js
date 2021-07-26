import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ( {id, title, url }) => {

    return (
        <div className="card animate__animated animate__zoomIn">
            <p> { title } </p>
            <img src={ url } alt={ title }/>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}