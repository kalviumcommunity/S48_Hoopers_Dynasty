import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./userdata.css";
 
export default function UserList() {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:3001')
    .then(result => setUsers(result.data))
    .catch(err => console.log(err))
  },[])


  return (
    <div className="w-100 vh-100 d-flex justify-content-center align-items-center text-align-center">
      <div className="w-50">
      <Link to="/create" className='btn btn-success' > Add +</Link>
        <table className="table">
          <thead>
            <tr>
              <th>fullName</th>
              <th>imageURL</th>
              <th>team</th>
              <th>statistics</th>
              <th>achievement</th>
            </tr>
          </thead>
          <tbody>
            {users.map(data => (
              <tr key={data._id}>
                <td>{data.fullName}</td>
                <td>{data.imageURL}</td>
                <td>{data.team}</td>
                <td>{data.statistics}</td>
                <td>{data.achievement}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

