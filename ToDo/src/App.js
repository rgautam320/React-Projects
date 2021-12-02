import "./App.css";
import { useState, useEffect } from "react";
import List from "./List";
import SearchAppBar from './Appbar';

function App() {
   // Getting locally stored values
   let ToDos;
   if (localStorage.getItem("ToDo") === null) {
      ToDos = [];
   } else {
      ToDos = JSON.parse(localStorage.getItem("ToDo"));
   }

   const [val, setVal] = useState("");
   const [value, setValue] = useState(ToDos);

   const Add = (event) => {
      setVal(event.target.value);
   };

   const submit = () => {
      if (val) {
         setValue((oldVal) => {
            return [...oldVal, val];
         });
      }
      setVal("");
   };

   const deleteItem = (id) => {
      setValue((oldItems) => {
         return oldItems.filter((val, ind) => {
            return ind !== id;
         });
      });
   };

   useEffect(() => {
      localStorage.setItem("ToDo", JSON.stringify(value));
   }, [value]);

   return (
      <>
         <SearchAppBar />
         <div className="App">
               <div className="card">
                  <h1 className="text-center my-heading">My ToDo List App</h1>
                  <div className="inputDiv d-flex justify-content-between">
                     <div className="forhr">
                        <input type="text" name="item" placeholder="Add an item" onChange={Add} value={val} autoFocus required />
                        <hr />
                     </div>
                     <div className="btnDiv">
                        <button className="plusBtn" onClick={submit}>
                           <i>+</i>
                        </button>
                     </div>
                  </div>
                  <div className="Output">
                     <div className="myItem">
                        <ol>
                           {value.map((val, ind) => {
                              return <List key={ind} id={ind} text={val} onSelect={deleteItem} />;
                           })}
                        </ol>
                     </div>
                  </div>
               </div>
            </div>
      </>
   );
}

export default App;
