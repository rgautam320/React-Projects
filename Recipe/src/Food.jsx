import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import React from "react";

import "./App.css";

const Food = (props) => {
   return (
      <>
         <Dialog onClose={props.close} open={props.open} className="dialog-box">
            <div className="my-dialog-div">
               <DialogTitle id="alert-dialog-title" className="dialog-heading text-center">
                  {props.foodname}
               </DialogTitle>
               <DialogContent>
                  <div className="row">
                     <div className="col-md-6 col-11 mx-auto">
                        <div className="dialog-recipe-card">
                           <figure>
                              <img src={props.foodphoto} alt="Khane Kura" />
                           </figure>
                        </div>
                     </div>
                     <div className="col-md-6 col-11 mx-auto ">
                        <h3 className="text-center text-danger py-1">Details</h3>
                        <div className="details-item d-flex flex-column justify-content-center">
                           <h5 className="text-left text-capitalize">Source: {props.sourceName}</h5>
                           <h5 className="text-left text-capitalize">Cuisin Type: {props.cuisintype}</h5>
                           <h5 className="text-left text-capitalize">Dish Type: {props.dishtype}</h5>
                           <h5 className="text-left text-capitalize">Meal Type: {props.mealtype}</h5>
                           <h5 className="text-left">Total Calories: {props.calory}</h5>
                           <h5 className="text-left">Total Weight: {props.weight}g</h5>
                           <h5 className="text-left">
                              Image URL:
                              <a href={props.imgURL}> Image Here</a>
                           </h5>
                           <h5 className="text-left">
                              Blog URL: <a href={props.blogURL}>Blog Here</a>
                           </h5>
                        </div>
                     </div>
                  </div>
               </DialogContent>
            </div>
         </Dialog>
      </>
   );
};

export default Food;
