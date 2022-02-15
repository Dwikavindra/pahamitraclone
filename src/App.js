import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar.js";
import Pahamitra from "./Pahamitra";
import KataPahamitra from "./KataPahamitra";

function App() {
  return (
    <div class=" bg-blue-100">
      <NavBar></NavBar>
      <Pahamitra></Pahamitra>
      <KataPahamitra></KataPahamitra>
    </div>
  );
}

export default App;
