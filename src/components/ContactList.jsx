import React from "react";

import axios from "axios";

import useSWR, { useSWRConfig } from "swr";


const ContactList = () => {
    const { mutate } = useSWRConfig();
    const fetch = async () => {
        const response = await axios.get("https://unpak-express-production.up.railway.app/contacts");
        return response.data;
    };

    const { data } = useSWR("contacts", fetch);
    if (!data) return <p className="flex justify-center font-bold text-3xl my-20">Loading...</p>;

    // const deleteContact = async (id) => {
    //     await axios.delete(`https://unpak-express-production.up.railway.app/contacts/${id}`);
    //     mutate("contacts");
    // };

    return (
        <div className="overflow-x-auto">
            {/* <Link to="/add" className='btn btn-primary btn-md mb-3'>Add Contact</Link> */}
            <table className="table w-full my-4">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Nama</th>
                        <th>Department</th>
                        <th>Information</th>
                        {/* <th>Actions</th> */}
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}

                    {data.map((contact, index) => (
                        <tr>
                            <th>{index + 1}</th>
                            <td>{contact.name}</td>
                            <td>{contact.department}</td>
                            <td>
                                <label
                                    htmlFor={`my-modal-${contact.id}`}
                                    className="btn btn-warning btn-sm "
                                >
                                    info
                                </label>
                                <input
                                    type="checkbox"
                                    id={`my-modal-${contact.id}`}
                                    className="modal-toggle"
                                />
                                <div className="modal ">
                                    <div className="modal-box max-w-2xl">
                                        <h3 className="font-bold text-lg text-center">
                                            Detail Information
                                        </h3>
                                        <table>
                                            {/* <tr>
                                                <th>Id</th>
                                                <td>{contact.id}</td>
                                            </tr> */}
                                            <tr>
                                                <th>Name</th>
                                                <td>{contact.name}</td>
                                            </tr>
                                            <tr>
                                                <th>Department</th>
                                                <td>{contact.department}</td>
                                            </tr>
                                            <tr>
                                                <th>Phone</th>
                                                <td>{contact.phone}</td>
                                            </tr>
                                        </table>

                                        <div className="modal-action">
                                            <a
                                                href={`https://api.whatsapp.com/send?phone=${contact.phone}&text=`}
                                            >
                                                <button className="btn btn-success btn-md ">
                                                    Chat
                                                </button>
                                            </a>

                                            <label htmlFor={`my-modal-${contact.id}`} className="btn">
                                                Close
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <div className="flex space-x-2 ml-3 my-3 p-2">
                                {/* <Link to={`/edit/${contact.id}`} className='btn btn-success btn-sm' >Edit</Link>
                                <button className="btn btn-error btn-sm" onClick={() => deleteContact(contact.id)}>Delete</button> */}
                            </div>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default ContactList;
