import { Button } from "@material-ui/core";
import "./Home.css";

const EndScreen = (props) => {
   return (
      <>
         <div className="d-flex justify-content-center align-items-center">
            <div className="quiz-box">
               <h5 className="text-center font-weight-bolder py-4">
                  Score: {props.score}/{props.total}
               </h5>

               <div className="row d-flex justify-content-center">
                  <Button variant="contained" color="primary" onClick={props.resetButton}>
                     Reset
                  </Button>
               </div>
            </div>
         </div>
      </>
   );
};

export default EndScreen;
