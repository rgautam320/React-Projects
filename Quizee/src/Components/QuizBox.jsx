import "./Home.css";
import { Button } from "@material-ui/core";

const QuizBox = (props) => {
   return (
      <>
         <div className="container my-5">
            <div className="row d-flex justify-content-center align-items-center">
               <div className="quiz-box col-12">
                  <h5 className="text-justify py-4">{props.quiz}</h5>
                  <div className="row px-5">
                     {props.answer.map((text, index) => (
                        <div className="col-md-3 col-sm-6 col-12">
                           <Button
                              variant="contained"
                              color="secondary"
                              className="my-2 each-btn"
                              key={index}
                              onClick={(event) => {
                                 event.target.style.color = "black";
                                 props.selected(text);
                              }}
                           >
                              {text}
                           </Button>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default QuizBox;
