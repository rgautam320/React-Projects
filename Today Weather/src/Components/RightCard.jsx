import React from "react";
import "../App.css";

const RightCard = (props) => {
   return (
      <>
         <div className="box">
            {props.pressure ? <h4 className="py-2 text-center">Pressure: {props.pressure} mmHg</h4> : null}

            {props.humidity ? <h4 className="py-2 text-center">Humidity: {props.humidity} % </h4> : null}

            {props.visibility ? <h4 className="py-2 text-center">Visibility: {props.visibility} m</h4> : null}

            {props.windspeed ? <h4 className="py-2 text-center">Wind Speed: {props.windspeed} km/hr</h4> : null}

            {props.winddir ? <h4 className="py-2 text-center">Wind Direction: {props.winddir}&deg;</h4> : null}
         </div>
      </>
   );
};

export default RightCard;
