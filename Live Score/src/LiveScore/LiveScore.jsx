import React, { useEffect, useState } from "react";
import "./LiveScore.css";
import ScoreCard from "./ScoreCard";
import { getMatches } from "../LiveScore/API";

const LiveScore = () => {
   const [matches, setMatches] = useState([]);

   useEffect(() => {
      getMatches()
         .then((data) => {
            console.log("Val", data);

            setMatches(data.matches);
         })
         .catch((error) => console.log(error));
   }, []);

   return (
      <>
         <div className="container my-5">
            <div className="row">
               <div className="col-md-5 col-10 mx-auto">
                  <h1 className="text-center text-dark py-4">Live Matches</h1>
                  {matches.map((val, ind) => {
                     return <ScoreCard match={val} />;
                  })}
               </div>
               <div className="col-md-5 col-10 mx-auto">
                  <h1 className="text-center text-dark py-4">Upcomming Matches</h1>
                  <ScoreCard />
               </div>
            </div>
         </div>
      </>
   );
};

export default LiveScore;
