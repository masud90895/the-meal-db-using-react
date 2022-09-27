import React, { useEffect, useState } from 'react';
import Meals from '../Meals/Meals';
import SiteBar from '../SiteBar/SiteBar';
import './Body.css'
const Body = ({searce}) => {
    const [name,setName] =useState([])
    useEffect(()=>{
        const getLocal =localStorage.getItem('Meals')
        if(getLocal){
            setName(JSON.parse(getLocal))
        }
    },[])
    

    return (
        <div className='body-container '>
            <Meals setName={setName} name={name} searce={searce} />
            <SiteBar name={name} setName={setName}/>
        </div>
    );
};

export default Body;