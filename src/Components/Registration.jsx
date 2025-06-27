
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Registration() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('https://vercel-server-rosy.vercel.app/auth/register', {username, password})
        .then(result => 
            {console.log(result)

                
                navigate ('/auth/login')
                
                
                
                
    }).catch(err => console.log(err))
    }
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="p-3 border border-1 w-25">
                    <h3>Register</h3>
                    <form onSubmit = {handleSubmit}>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input type = "text" placeholder="Enter Username" className='form-control' 
                            onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                         <div>
                            <label htmlFor="password">Password</label>
                            <input type = "password" placeholder="Enter Password"  className="form-control"
                             onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button className=" nt-1 btn btn-success w-100">Submit</button>
       <Link to="/auth/login"><button className="btn btn-default w-100 mt-2 border">
        Login</button></Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Registration
