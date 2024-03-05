import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HoopersDynasty from "./Components/landingpage";
import Login from "./Components/login";
import Form from "./Components/signup"; 
import UserList from "./Components/userdata";
import CreateUser from "./Components/CreateUser";
import UpdateUser from "./Components/UpdateUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HoopersDynasty />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Form />} /> {/* Add this line */}
        <Route path="/UserList" element={<UserList />} />
        <Route path="/create" element={<CreateUser />}/>
        <Route path="/update/:id" element={<UpdateUser />}/>
      </Routes>
    </Router>
  );
}

export default App;
