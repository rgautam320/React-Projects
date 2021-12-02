import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import DenseAppBar from "./Nav";

const Recipe = () => {
   const [food, setFood] = useState([]);
   const [search, setSearch] = useState();

   const APP_ID = "933ae172";
   const API_KEY = "3d562409fce24088c152ca378b0a1e0a";

   const Searched = (event) => {
      event.preventDefault();

      const search_val = event.target.elements.search.value;

      setSearch(search_val);
   };

   useEffect(() => {
      try {
         const getAPI = async () => {
            const URL = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${API_KEY}`;
            const response = await fetch(URL);
            const data = await response.json();

            let foodArray = data.hits;
            foodArray.pop();
            setFood(foodArray);
         };
         getAPI();
      } catch (error) {}
   }, [search]);

   return (
      <>
         <DenseAppBar />

         <div className="container my-5">
            <div className="row my-3">
               <div className="col-11 mx-auto">
                  <form className="input-field" onSubmit={Searched}>
                     <input type="text" name="search" placeholder="Search Anything" className="input-search" />
                     <Button variant="contained" color="primary" type="submit" className="btn-search">
                        Search
                     </Button>
                  </form>
               </div>
            </div>
            <div className="row">
               {food.map((val, ind) => {
                  return <Card key={ind} title={val.recipe.label} foodimage={val.recipe.image} calory={Math.round(val.recipe.calories)} source={val.recipe.source} dialog={val.recipe.label} cuisintype={val.recipe.cuisineType} dishtype={val.recipe.dishType} mealtype={val.recipe.mealType} imgURL={val.recipe.image} weight={Math.round(val.recipe.totalWeight)} blogURL={val.recipe.url} />;
               })}
            </div>
         </div>
      </>
   );
};

export default Recipe;
