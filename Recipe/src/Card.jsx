import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./App.css";
import Food from "./Food";

const Card = (props) => {
   const [open, setOpen] = useState(false);

   const DialogOpen = () => {
      handleOpen();
   };

   const handleClose = () => {
      setOpen(false);
   };

   const handleOpen = () => {
      setOpen(true);
   };

   return (
      <>
         <Food open={open} close={handleClose} foodname={props.title.length < 60 ? `${props.title}` : `${props.title.substring(0, 60)}...`} foodphoto={props.foodimage} sourceName={props.source} cuisintype={props.cuisintype} dishtype={props.dishtype} mealtype={props.mealtype} imgURL={props.imgURL} blogURL={props.blogURL} weight={props.weight} calory={props.calory} />
         <div className="col-lg-4 col-md-6 col-11 my-2 mx-auto">
            <div className="recipe-card">
               <h4 className="text-center my-2 my-heading">{props.title.length < 45 ? `${props.title}` : `${props.title.substring(0, 45)}...`}</h4>
               <figure>
                  <img src={props.foodimage} alt="Tasbir Ho" />
               </figure>
               <div className="row">
                  <div className="col-7">
                     <h6>
                        <strong>Source: </strong>
                        {props.source.length < 12 ? `${props.source}` : `${props.source.substring(0, 12)}...`}
                     </h6>
                  </div>
                  <div className="col-5">
                     <h6>
                        <strong> Calories: </strong> {props.calory}
                     </h6>
                  </div>
               </div>
               <div className="row mx-auto">
                  <div className="col-8 mx-auto">
                     <Button
                        variant="contained"
                        color="primary"
                        className="w-100 mt-3 see-more-btn"
                        onClick={() => {
                           DialogOpen();
                        }}
                     >
                        See More
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Card;
