import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import AOS from "aos";
import "aos/dist/aos.css";

const Meals = ({setName,name,searce}) => {
    const [meals,setMeals] = useState([])
    
    useEffect(()=>{
        fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${searce}`)
        .then(res=>res.json())
        .then(data => setMeals(data.meals))
    },[searce])


    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    

    

    return (
        <div >
            {
                !meals ||
                meals?.length<=0 ?  <div id='not-fount' className='text-4xl font-bold mt-20'>
                <h1>কোনো ডাটা পাওয়া যায় নি। আবার চেষ্টা করুন-ধন্যবাদ</h1>
            </div> 
            :
              <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 px-10 mt-10 ' >
            {
                meals?.map(meal => <Meal key={meal.idMeal}  meal={meal} setName={setName} name={name} />)
            }
            </div>
            }      

        </div>
    );
};

export default Meals;