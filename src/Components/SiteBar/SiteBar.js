import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight , faTrashArrowUp} from '@fortawesome/free-solid-svg-icons'
import SiteCard from '../SiteCard/SiteCard';



const SiteBar = ({name,setName}) => {
  
 /*  const deleteBtn=(id)=>{
    const matchedId= name.filter(match=> match.idMeal !== id)
    setName(matchedId)
    localStorage.setItem('Meals', JSON.stringify(matchedId))
  } */

  const clearAll=()=>{
    setName([])
    localStorage.removeItem('Meals')
  }
 
    return (
        <div className=''>
            <div className="drawer-side sticky top-[66px]">
    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
    <ul className="menu p-4 overflow-y-auto w-[100%] bg-slate-800 md:h-full  text-white list-decimal">
      <h1 className='text-2xl font-bold mb-5 border-b-red-600 border-b-2 '>Selected Meals - {name.length}</h1>
      {
       /*  name.map(mealName=><li className='flex flex-row' key={mealName.idMeal}>
          <a><FontAwesomeIcon className='text-red-700' icon={faArrowRight} />   {mealName.strMeal} </a> 
        <button onClick={()=>deleteBtn(mealName.idMeal)}> <FontAwesomeIcon className='text-red-700' icon={faTrashArrowUp} /></button>
         </li>) */
         name.map(mealName=> <SiteCard  mealName={mealName} name={name} setName={setName}/>)
      }
    
      
    <button onClick={clearAll} className="btn btn-error">Clear All</button>
    </ul>
  </div>
        </div>
    );
};

export default SiteBar;