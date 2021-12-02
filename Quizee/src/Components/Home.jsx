import { useState } from "react";
import "./Home.css";
import Form from "./Form";
import EndScreen from "./EndScreen";
import QuizBox from "./QuizBox";

const Home = () => {
   const [click, setClick] = useState(false);

   const [question, setQuestion] = useState([]);
   const [score, setScore] = useState(0);
   const [count, setCount] = useState(0);
   const [quizCount, setQuizCount] = useState();

   const eventHandler = (event) => {
      event.preventDefault();

      const quizNumber = Number(event.target.elements.no_question.value);
      const difficulty = event.target.elements.difficulty_type.value;
      const category = event.target.elements.category_type.value;

      setQuizCount(quizNumber);

      try {
         const getAPI = async () => {
            const URL = `https://opentdb.com/api.php?amount=${quizNumber}&category=${category}&difficulty=${difficulty}&type=multiple`;
            const response = await fetch(URL);
            const data = await response.json();

            const formattedCategory = data.results.map((cat) => {
               const incorrectAnswersIndexes = cat.incorrect_answers.length;
               const randomIndex = Math.round(Math.random() * (incorrectAnswersIndexes - 0) + 0);

               cat.incorrect_answers.splice(randomIndex, 0, cat.correct_answer);

               return {
                  ...cat,
                  answers: cat.incorrect_answers,
               };
            });
            setQuestion(formattedCategory);
         };
         getAPI();
         setCount(0);
         setClick(true);
      } catch (error) {
         console.log("Error ==> " + error);
      }
   };

   const resetButton = (event) => {
      event.preventDefault();
      setCount(0);
      setScore(0);
      setClick(false);
   };

   return (
      <>
         <div className="container my-3 py-3">
            <h1 className="text-center my-heading display-4 font-weight-bolder py-2">Quizee</h1>
            <Form formSubmitted={eventHandler} />
            {click && count < quizCount
               ? question.map((val, ind) => {
                    return (
                       <QuizBox
                          key={ind}
                          quiz={val.question}
                          answer={val.incorrect_answers}
                          selected={(x) => {
                             if (x === val.correct_answer) {
                                setScore(score + 1);
                             }
                             setCount(count + 1);
                          }}
                       />
                    );
                 })
               : null}

            {count === quizCount ? <EndScreen score={score} resetButton={resetButton} total={quizCount} /> : null}
         </div>
      </>
   );
};

export default Home;
