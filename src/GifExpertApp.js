import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {


    const [categories, setcategories] = useState(['One Punch']);

//   const handleAdd = () => setcategories( cats => [...cats, 'Categoria random']);
    

    return (<>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setcategories }/>
        <hr />
        
        <ol>
            {
                categories.map( item => 
                    <GifGrid 
                        key={ item }
                        category={ item } />     
                )
            }
        </ol>
    </>)
};

export default GifExpertApp;
