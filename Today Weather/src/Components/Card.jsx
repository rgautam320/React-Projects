import React from "react";

const Card = (props) => {
   return (
      <>
         <div className="box">
            {props.city && props.country ? (
               <h1 className="py-4 text-center">
                  {props.city}, {props.country}
               </h1>
            ) : null}

            <h2 className="py-3 text-center">
               <i className={`wi ${props.icon} display-2`}></i>
            </h2>
            {props.temp ? <h1 className="py-2 text-center">{props.temp}&deg;C</h1> : null}

            {props.min && props.max ? (
               <h4 className="py-1 text-center">
                  Min: {props.min} &deg;C | Max: {props.max} &deg;C
               </h4>
            ) : null}

            {props.feel ? <h4 className="py-2 text-center text-capitalize">Feels Like: {props.feel}&deg;C</h4> : null}

            {props.desc ? <h4 className="py-2 text-center text-capitalize">{props.desc}</h4> : null}
         </div>
      </>
   );
};

export default Card;
