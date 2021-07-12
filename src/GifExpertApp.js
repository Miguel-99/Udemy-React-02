import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';


const GifExpertApp = () => {


    const [categories, setcategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

//   const handleAdd = () => setcategories( cats => [...cats, 'Categoria random']);
    

    return (<>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setcategories }/>
        <hr />
        <ol>
        {categories.map( item => <li key={item}>{item}</li>)}
        </ol>
    </>)
};

export default GifExpertApp;
