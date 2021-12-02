import "./App.css";
import SearchAppBar from "./Components/Navbar";
import Weather from "./Components/Weather";

function App() {
   return (
      <div className="App">
         <SearchAppBar />
         <Weather />
      </div>
   );
}

export default App;
