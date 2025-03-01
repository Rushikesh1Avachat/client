import axios from 'axios';
import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate=useNavigate()
    axios.defaults.withCredentials=true
    useEffect(() => {
    axios.get("http://localhost:3000/auth/verify", { withCredentials: false })
    .then(response => console.log(response) )
  .catch(error => console.error("Axios Error:", error));
    }, []);
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard