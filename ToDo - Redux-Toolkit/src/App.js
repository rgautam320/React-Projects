import "./App.css";
import AddToDo from "./Components/AddToDo";
import List from "./Components/List";
import Navbar from "./Components/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <div className="container App">
                <div className="card px-2">
                    <div className="row mt-3">
                        <AddToDo />
                    </div>
                    <hr />
                    <List />
                </div>
            </div>
        </>
    );
}

export default App;
