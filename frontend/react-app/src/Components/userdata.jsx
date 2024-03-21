import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./userdata.css";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/getPlayers/')
      .then(result => {
        console.log(result.data);
        setUsers(result.data)
      })
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  const handleDelete = (id) => {
    axios.delete('http://localhost:3000/deletePlayer/' + id)
      .then(res => {
        window.location.reload();
        console.log(res);
      })
      .catch(errr => console.log(errr));
  };

  return (
    <div className="w-100 vh-100 d-flex justify-content-center align-items-center text-align-center">
      <div className="w-50">
        <Link to="/create" className='btn btn-success'> Add +</Link>
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
                <td>
                  <Link to={`/update/${data._id}`} className='btn btn-success'> Update</Link>
                  <button className='btn btn-danger'
                    onClick={(e) => handleDelete(data._id)}> Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
