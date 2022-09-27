import React, { useState } from 'react';
import Meals from '../Meals/Meals';
import SiteBar from '../SiteBar/SiteBar';
import './Body.css'
const Body = ({searce}) => {
    const [name,setName] =useState([])
    return (
        <div className='body-container '>
            <Meals setName={setName} name={name} searce={searce} />
            <SiteBar name={name} />
        </div>
    );
};

export default Body;