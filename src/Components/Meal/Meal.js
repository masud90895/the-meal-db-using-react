import React from 'react';
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Meal = ({meal,setName,name}) => {
    const {strInstructions,strMealThumb,strMeal,strCategory,idMeal} =meal
    // console.log(name);
    const handleAddToCart=(id)=>{
      const info={
        idMeal,
        strInstructions,
        strMealThumb,
        strMeal,
        strCategory
      }
      if(name){
        if(name.length < 7){
          const chackDualId=name.find(chackId=> chackId.idMeal === id )

            if(chackDualId){
                Swal.fire(
                  'Bullshit?',
                  'Why You Adding Same Item Again',
                  'question'
                  )
            return
          }else{
            const newMeal=[...name,info] 
            localStorage.setItem('Meals',JSON.stringify(newMeal))
           setName(newMeal)
            return;
          }
        }
        else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "You can't added more than seventh item",
          })
          return
        }
        
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
    <button onClick={()=>handleAddToCart(meal.idMeal)}  className="btn btn-outline btn-error">Add To Card <FontAwesomeIcon className='ml-2' icon={faCartShopping} /></button>
  </div>
</div>
        </div>
    );
};

export default Meal;

