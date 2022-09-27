import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight , faTrashArrowUp} from '@fortawesome/free-solid-svg-icons'

const SiteCard = ({mealName,name,setName}) => {
    const deleteBtn=(id)=>{
        const matchedId= name.filter(match=> match.idMeal !== id)
        setName(matchedId)
        localStorage.setItem('Meals', JSON.stringify(matchedId))
      }
    const {strMealThumb,strMeal,idMeal} =mealName
    return (
        <div className='text-black'>
            <div className="card card-side bg-base-100 shadow-xl h-20 mb-2 flex">
             <div>
             <img className='lg:w-[150px] h-[100%]' src={strMealThumb} alt="Movie"/>
             </div>
            <div className="ml-[15%] flex">
                <h2 className="card-title">{strMeal}</h2>
            </div>
            <button className='ml-[20%] text-2xl' onClick={()=>deleteBtn(mealName.idMeal)}> <FontAwesomeIcon className='text-red-700' icon={faTrashArrowUp} /></button>
                </div>
        </div>
    );
};

export default SiteCard;