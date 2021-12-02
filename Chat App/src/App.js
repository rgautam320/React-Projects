import { ChatEngine } from "react-chat-engine";
// import ChatFeed from "./Components/ChatFeed";
import "./App.css";
import Login from "./Components/Login";

function App() {

   if(!localStorage.getItem('username'))
   {
      return <Login />
   }
   const projectID = "ffd7b992-3170-4161-802f-00b2acbea596";
   return (
      <>
         <ChatEngine height="100vh" projectID={projectID} userName={localStorage.getItem('username')} userSecret={localStorage.getItem('password')} />
      </>
   );
}

export default App;
