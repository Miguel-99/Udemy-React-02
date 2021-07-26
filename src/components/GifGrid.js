import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types'


export const GifGrid = ({ category }) => {

    const { data:images, loading}= useFetchGifs( category );

    return (
        <>
            <h3> {category}</h3>  
            <div className="card-grid">
                { loading && <p>Cargando...</p>}
                {
                    images.map( obj => (
                        <GifGridItem 
                            key={ obj.id }
                            {...obj}
                        />
                    ))
                }                
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category = PropTypes.string.isRequired
}