import "./App.css";
import Note from "./Note";
import SearchAppBar from "./Navbar";

function App() {
   return (
      <>
         <div className="App">
            <SearchAppBar />
            <Note />
         </div>
      </>
   );
}

export default App;
