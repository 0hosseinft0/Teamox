import { Routes , Route ,Navigate } from "react-router-dom";
import SignUp from "./components/Form/SignUp";
import Login from "./components/Form/Login";
import Home from "./components/Landing/Home";
import Nemone from "./components/Nemonekar/Nemone"
import Aboutu from "./components/Aboutus/Aboutu";
import Services from "./components/Servis/Services";


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/service" element={<Services />}/>
      <Route path="/nemone" element={<Nemone />}/>
      <Route path="/aboutus" element={<Aboutu />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/" element= {<Navigate replace to="/home" />} />
      </Routes>
    </div>
  );
}

export default App;
