import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import "./Home.css";

export default function SimpleSelect(props) {
   const [categories, setCategories] = useState([]);

   useEffect(() => {
      const fetchCategories = async () => {
         const response = await fetch("https://opentdb.com/api_category.php");
         const data = await response.json();

         setCategories(data.trivia_categories);
      };
      fetchCategories();
   }, []);

   return (
      <>
         <form onSubmit={props.formSubmitted}>
            <div className="row">
               <div className="col-md-4 col-12 mx-auto my-2">
                  <label htmlFor="no_question">Number of Questions</label> <br />
                  <input type="number" name="no_question" max="10" min="1" defaultValue="3" className="w-100 input-class" />
               </div>
               <div className="col-md-4 col-12 mx-auto my-2">
                  <label htmlFor="difficulty_type">Select Difficulty</label> <br />
                  <select name="difficulty_type" className="w-100 input-class">
                     <option value="">Any Difficulty</option>
                     <option value="easy">Easy</option>
                     <option value="medium">Medium</option>
                     <option value="hard">Hard</option>
                  </select>
               </div>
               <div className="col-md-4 col-12 mx-auto my-2">
                  <label htmlFor="category_type">Select Category</label> <br />
                  <select name="category_type" className="w-100 input-class">
                     <option value="">Any Category</option>
                     {categories.map((val, ind) => {
                        return (
                           <option value={val.id} id={ind}>
                              {val.name}
                           </option>
                        );
                     })}
                  </select>
               </div>
            </div>
            <div className="row mx-auto mt-2 mb-5 submit-btn">
               <Button variant="contained" color="primary" type="submit" className="w-100 py-3">
                  Submit
               </Button>
            </div>
         </form>
      </>
   );
}
