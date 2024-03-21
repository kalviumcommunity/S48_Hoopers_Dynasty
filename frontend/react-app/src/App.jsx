import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HoopersDynasty from "./Components/landingpage";
import Login from "./Components/login";
import Form from "./Components/signup"; 
import UserList from "./Components/userdata";
import CreateUser from "./Components/CreateUser";
import UpdateUser from "./Components/UpdateUser";
import HomePage from "./Components/homePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HoopersDynasty />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Form />} /> 
        <Route path="/UserList" element={<UserList />} />
        <Route path="/create" element={<CreateUser />}/>
        <Route path="/update/:id" element={<UpdateUser />}/>
        <Route path="/home" element={<HomePage />}/>
      </Routes>
    </Router>
  );
}

export default App;
