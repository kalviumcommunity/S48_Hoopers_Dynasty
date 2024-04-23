import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./userdata.css";

export default function UserList() {
  const [players, setplayers] = useState([]);
  const [users,setusers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/getUsers/')
      .then(result => {
        console.log(result.data);
        setusers(result.data)
      })
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3000/getPlayers/')
      .then(result => {
        console.log(result.data);
        setplayers(result.data)
      })
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }
  const username = getCookie('username')
  console.log(username)
  const [selectedUser,setSelecteduser]=useState(username)

  const handleselectchange = (e)=>{
    setSelecteduser(e.target.value)
  }
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
      <select value={selectedUser} onChange={handleselectchange} id="">
       {users.map((user,i)=>(
        <option key={i} value={user.username}>{user.username}</option>
       ))}
      </select>
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
            {players.filter(player=>player.createdby==selectedUser).map(data => (
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
