import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const history = useNavigate(""); 

    // const header = { "Access-Control-Allow-Origin": "*" }; 

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log("Clicked");
        axios.post("https://645f33439d35038e2d1ebbec.mockapi.io/crud-operation",
        { 
            name: name, 
            email: email,
        })
 
        .then(()=>{
        history("/read");
        });
    };

    return ( <>
        <div className="d-flex justify-content-between mt-4">
            <h2>Create</h2>
            <Link to="/read"> 
                <button className="btn btn-primary">Show Data</button>
            </Link>
        </div>
        <form className="mt-4 p-2">
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                Submit
            </button>
        </form>
    </>
    );
}

export default Create;