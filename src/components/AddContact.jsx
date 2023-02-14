import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AddContact = () => {
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();

    const saveContact = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/contacts", {
            name: name,
            department: department,
            phone: phone,
        });
        navigate("/");
    };

    return (
        <div className="max-w-md mx-auto my-10 bg-white p-8 rounded-xl shadow">
            <form onSubmit={saveContact}>
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

export default AddContact;
