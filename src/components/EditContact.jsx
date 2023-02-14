import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditContact = () => {
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();


    const { id } = useParams();

    useEffect(() => {
        const getProductById = async () => {

            const response = await axios.get(`http://localhost:5000/contacts/${id}`);
            setName(response.data.name);
            setDepartment(response.data.department);
            setPhone(response.data.phone);

        }
        getProductById();

    }, [id]);



    const updateContact = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/contacts/${id}`, {
            name: name,
            department: department,
            phone: phone,
        });
        navigate("/");
    };

    return (
        <div className="max-w-md mx-auto my-10 bg-white p-8 rounded-xl shadow">
            <form onSubmit={updateContact}>
                <label className="font-bold text-xl text-slate-700 flex justify-center">
                    Contact Name
                </label>
                <div className="flex flex-col">
                    <div className="mb-5">
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input input-bordered input-accent w-full max-w-xs my-2"
                        />
                        <input
                            type="text"
                            placeholder="Department"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            className="input input-bordered input-accent w-full max-w-xs my-2"
                        />
                        <input
                            type="text"
                            placeholder="Phone(62xxx)"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="input input-bordered input-accent w-full max-w-xs my-2"
                        />
                        <br />
                        <button type="submit" className="btn btn-success btn-md">
                            Save
                        </button>
                        <Link to="/" className="btn btn-primary btn-md mx-2">
                            Back
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditContact;
