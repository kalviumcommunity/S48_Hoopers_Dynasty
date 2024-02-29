import { useEffect, useState } from "react";
import axios from 'axios';
import './userdata.css'

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/getuser");
        console.log("Response data:", response.data);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-100 vh-100 d-flex justify-content-center align-items-center text-align-center">
      <div className="w-50">
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

