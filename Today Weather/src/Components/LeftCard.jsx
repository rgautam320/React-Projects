import React from "react";
import "../App.css";

const LeftCard = (props) => {
   return (
      <>
         <div className="box">
            {props.lat ? <h4 className="py-2 text-center">Latitude: {props.lat}&deg;</h4> : null}

            {props.lon ? <h4 className="py-2 text-center">Longitude: {props.lon}&deg;</h4> : null}

            {props.timezone ? <h4 className="py-2 text-center">Timezone: {props.timezone} GMT</h4> : null}
         </div>
      </>
   );
};

export default LeftCard;
