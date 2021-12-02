import React from "react";
import { Button } from "@material-ui/core";

const Form = (props) => {
   return (
      <>
         <form onSubmit={props.callFunction}>
            <div className="row mx-auto d-flex justify-content-center align-items-center">
               <div className="col-md-5 my-1 col-10 d-flex justify-content-center align-items-center">
                  <input type="text" placeholder="City" name="city" required className="input-class" />
               </div>
               <div className="col-md-5 my-1 col-10 d-flex justify-content-center align-items-center">
                  <input type="text" placeholder="Country" name="country" required className="input-class" />
               </div>
               <div className="col-md-2 my-1 col-10 d-flex justify-content-center align-items-center">
                  <Button type="submit" variant="contained" color="primary">
                     Get Weather
                  </Button>
               </div>
            </div>
         </form>
      </>
   );
};

export default Form;
