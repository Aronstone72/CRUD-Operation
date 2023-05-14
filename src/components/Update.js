import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Update = () => {

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    useEffect(() => {

        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));

    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("Id...", id);
        axios.put(`https://645f33439d35038e2d1ebbec.mockapi.io/crud-operation/${id}`,
            {
                name: name,
                email: email,
            }
        ).then(() => {
            navigate("/read");
        });
    };


    return (
        <>
            <h2 className='mt-4'>Update</h2>
            <form className='mt-4'>
                <div className="mb-4">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleUpdate}
                >
                    Update
                </button>
                <Link to="/read">
                    <button
                        className="btn btn-secondary m-4"
                    >
                        Back
                    </button>
                </Link>
            </form>
        </>
    );
};

export default Update;