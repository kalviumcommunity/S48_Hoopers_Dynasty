import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import "./CreateUser.css"

function CreateUser(){
    const [fullName, setfullName] = useState()
    const [imageURL, setimageURL] = useState()
    const [team, setteam] = useState()
    const [statistics, setstatistics] = useState()
    const [achievement, setachievement] = useState()
    const navigate = useNavigate()

    const Submit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:3000/createPlayer", {fullName, imageURL, team, statistics, achievement })
        .then(result => {
            console.log(result)+
            navigate('/UserList')
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="d-flex vh-100 bg-black justify-content-center align-items-center">
            <div className='w-100 bg-white rounded p-3'>
                <form onSubmit={Submit}>
                    <h2>Add Users</h2>
                    <div className="mb-2">
                        <label htmlFor=""> fullName</label>
                        <input type="text" placeholder="Enter FullName" className="form-control"
                        onChange={(e)=>setfullName(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">imageURL </label>
                        <input type="url" placeholder="Enter imageURL" className="form-control"
                        onChange={(e)=>setimageURL(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">team </label>
                        <input type="text" placeholder="Enter team name" className="form-control"
                        onChange={(e)=>setteam(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">statistics </label>
                        <input type="text" placeholder="Enter statistics" className="form-control"
                        onChange={(e)=>setstatistics(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">achievement</label>
                        <input type="text" placeholder="Enter the achievements" className="form-control"
                        onChange={(e)=>setachievement(e.target.value)}/>
                    </div>
                    <div className="btncontainer">
                    <button className="btn btn-success">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateUser;