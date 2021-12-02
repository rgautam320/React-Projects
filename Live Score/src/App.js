import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import "./LiveScore/LiveScore.css";
import DenseAppBar from "./LiveScore/Navbar";
import ScoreCard from "./LiveScore/ScoreCard";
import { getMatches } from "./LiveScore/API";

function App() {
   const [matches, setMatches] = useState([]);

   useEffect(() => {
      getMatches()
         .then((data) => setMatches(data.matches))
         .catch((error) => console.log(error));
   }, []);

   return (
      <>
         <DenseAppBar />

         <div className="container my-5">
            <div className="row">
               <div className="col-md-5 col-10 mx-auto">
                  <h1 className="text-center text-dark py-4">Live Matches</h1>
                  {matches.map((match) => (
                     <Fragment>{match.type === "Twenty20" ? <ScoreCard key={match.unique_id} match={match} /> : ""}</Fragment>
                  ))}
               </div>

               <div className="col-md-5 col-10 mx-auto">
                  <h1 className="text-center text-dark py-4">First Class Matches</h1>
                  {matches.map((match) => (
                     <Fragment>{match.type === "First-class" ? <ScoreCard key={match.unique_id} match={match} /> : ""}</Fragment>
                  ))}
               </div>
            </div>
         </div>
      </>
   );
}

export default App;
