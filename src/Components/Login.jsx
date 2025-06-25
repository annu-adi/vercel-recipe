import React, {useState} from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'

function Login() {
     const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    
    axios.defaults.withCredentials = true;
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/auth/login', {username, password})
        .then(result => {
            window.localStorage.setItem("id",result.data.id)
             console.log(result)
             if(result.data.message === "successfully login"){
            navigate('/')
             }
    }).catch(err => console.log(err))
    }
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="p-3 border border-1 w-25">
                    <h3>Login</h3>
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
                        <button className=" nt-1 btn btn-success w-100">Login</button>
       <Link to="/auth/register"><button className="btn btn-default w-100 mt-2 border">
        Register</button></Link>
                    </form>
                </div>
            </div>
        </div>
    )

   
}
export default Login