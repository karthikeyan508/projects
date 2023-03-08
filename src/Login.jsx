import React, { useState } from "react";
import axios from 'axios'
const Login = (props) => {
    const [id1, setId] = useState('');
    const [name1, setname] = useState('');
    const [job1, setjob] = useState('');
    const [salary1, setsalary] = useState('');
    const [place1, setplace] = useState('');
    const [countries1, setcountries] = useState('');
    
        async function save(event)
        {
            event.preventDefault();
        try
            {
             await axios.post("http://localhost:8080/addDetails",
            {
            
            sid:id1,
            sname:name1,
            job:job1,
            salary:salary1,
            place:place1,
            countries:countries1
            });
              alert("Registation  is Successfully Completed.");
              setId("");
              setname("");
              setjob("");
              setsalary("");
              setplace("");
              setcountries(""); 
            }
        catch(err)
            {
              alert("User Registation Failed");
            }
        }
            
    return (
        <div className="auth-form-container">
            <h2>Job Details</h2>
            <form className="login-form" >
            <input value={id1} onChange={(e) => setId(e.target.value)}type="int" placeholder="Enter your ID" id="id" name="id" />
                <label htmlFor="password">Name</label>
                <label htmlFor="name"></label>
                <input value={name1} onChange={(e) => setname(e.target.value)}type="String" placeholder="enter your name" id="name" name="name" />
                <label htmlFor="id">Job</label>
                <input value={job1} onChange={(e) => setjob(e.target.value)} type="String" placeholder="enter your job" id="job" name="job" />
                <label htmlFor="job">salary</label>
                <input value={salary1} onChange={(e) => setsalary(e.target.value)} type="int" placeholder="enter your salary" id="salary" name="salary" />
                <label htmlFor="salary">place</label>
                <input value={place1} onChange={(e) => setplace(e.target.value)} type="String" placeholder="enter your place" id="place" name="place" />
                <label htmlFor="place">countries</label>
                <input value={countries1} onChange={(e) => setcountries(e.target.value)} type="String" placeholder="enter your countries" id="countries" name="countries" />
                <button type="submit" onClick={save}>Submit</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
    }
    export default Login;
