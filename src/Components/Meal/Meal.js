import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Meal = ({meal,setName,name}) => {
    const {strInstructions,strMealThumb,strMeal,strCategory,idMeal} =meal
    const handleAddToCart=()=>{
      const info={
        idMeal,
        strInstructions,
        strMealThumb,
        strMeal,
        strCategory
      }
      if(name){
        const newMeal=[...name,info] 
        localStorage.setItem('Meals',JSON.stringify(newMeal))
        setName(newMeal)
      }
      

    }
    return (
        <div data-aos="zoom-out-down">
            <div className="card w-full bg-base-100 shadow-xl">
  <figure><img src={strMealThumb} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {strMeal}
      <div className="badge badge-secondary">{strCategory}</div>
    </h2>
    <p>{strInstructions.length > 60 ? strInstructions.slice(0,60)+"..." : strInstructions}</p>
    <button onClick={handleAddToCart}  className="btn btn-outline btn-error">Add To Card <FontAwesomeIcon className='ml-2' icon={faCartShopping} /></button>
  </div>
</div>
        </div>
    );
};

export default Meal;

