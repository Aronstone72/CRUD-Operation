import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Read = () => {

    const [data, setData] = useState([]);
    const [tabledark, setTabledark] = useState("");

    function getData() {
        axios.get("https://645f33439d35038e2d1ebbec.mockapi.io/crud-operation")
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            });
    }

    function handleDelete(id) {
        axios.delete(
            `https://645f33439d35038e2d1ebbec.mockapi.io/crud-operation/${id}`
        ).then(() => {
            getData()
        })
    }

    const setToLocalStoreage = (id, name, email) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <>
            <div className="form-check form-switch mt-4">
                <input className="form-check-input" type="checkbox" 
                onClick={() => {
                    if(tabledark === 'table-dark') setTabledark("")
                    else setTabledark("table-dark");
                }} />
            </div>
            <div className="d-flex justify-content-between mt-4">
                <h2>Read Operation</h2>
                <Link to="/">
                    <button className="btn btn-secondary">Create</button>
                </Link>
            </div>

            <table className={`table ${tabledark}`}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                {data.map((eachData) => {
                    return (
                        <>
                            <tbody>
                                <tr key={eachData.id}>
                                    <th scope="row">{eachData.id}</th>
                                    <td>{eachData.name}</td>
                                    <td>{eachData.email}</td>
                                    <td>
                                        <Link to="/update">
                                            <button className='btn-success'
                                                onClick={() =>
                                                    setToLocalStoreage(
                                                        eachData.id,
                                                        eachData.name,
                                                        eachData.email)
                                                }
                                            >
                                                Edit
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button className='btn-danger'
                                            onClick={() => handleDelete(eachData.id)}>Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </>
                    );
                })

                }
            </table>

        </>
    );
};

export default Read;