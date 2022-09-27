import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const SiteBar = ({name}) => {
  console.log(name);
    return (
        <div className=''>
            <div className="drawer-side sticky top-[66px]">
    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
    <ul className="menu p-4 overflow-y-auto w-full bg-slate-800 md:h-screen  text-white list-decimal">
      <h1 className='text-2xl font-bold mb-5 border-b-red-600 border-b-2 '>Selected Meals - {name.length}</h1>
      {
        name.map(mealName=><li key={mealName.idMeal}> <a><FontAwesomeIcon className='text-red-700' icon={faArrowRight} />   {mealName.strMeal}</a></li>)
      }
      
    </ul>
  </div>
        </div>
    );
};

export default SiteBar;