import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";

function UpdateUser() {
    const { id } = useParams();
    const [fullName, setfullName] = useState('');
    const [imageURL, setimageURL] = useState('');
    const [team, setteam] = useState('');
    const [statistics, setstatistics] = useState('');
    const [achievement, setachievement] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/getUser/${id}`)
            .then(response => {
                const { fullName, imageURL, team, statistics, achievement } = response.data;
                setfullName(fullName);
                setimageURL(imageURL);
                setteam(team);
                setstatistics(statistics);
                setachievement(achievement)
            })
            .catch(error => console.log(error));
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3001/updateUser/${id}`, { fullName, imageURL, team, statistics, achievement })
            .then(response => {
                console.log(response);
                navigate('/userList');
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="d-flex vh-100 bg-black justify-content-center align-items-center">
            <div className='w-200 bg-white rounded p-3'>
                <form onSubmit={handleUpdate}>
                    <h2>Update Users</h2>
                    <div className="mb-2">
                        <label htmlFor="">fullName </label>
                        <input type="text" placeholder="Enter FullName" className="form-control"
                            value={fullName} onChange={(e) => setfullName(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">imageURL </label>
                        <input type="text" placeholder="Enter imageURL" className="form-control"
                            value={imageURL} onChange={(e) => setimageURL(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">team </label>
                        <input type="text" placeholder="Enter team name" className="form-control"
                            value={team} onChange={(e) => setteam(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">statistics </label>
                        <input type="text" placeholder="Enter statistics" className="form-control"
                            value={statistics} onChange={(e) => setstatistics(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">achievement </label>
                        <input type="text" placeholder="Enter achievement" className="form-control"
                            value={achievement} onChange={(e) => setachievement(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateUser;