'use client';

import React, { useState } from 'react';

export default function FormPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [data, setData] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const uppdateData = [...data, { first_name: firstName, last_name: lastName, email: email, gender: gender }];
        setFirstName('');
        setLastName('');
        setEmail('');
        setGender('');
        setData(uppdateData);
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 shadow-md rounded-md max-w-md mx-auto"
            >
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name:
                </label>
                <input
                    type="text"
                    id="name"
                    value={firstName}
                    name="firstName"
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
                />

                <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name:
                </label>
                <input
                    type="text"
                    id="lastname"
                    value={lastName}
                    name="lastName"
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
                />

                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email:
                </label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
                />

                <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700 mb-2">
                    Gender:
                </label>
                <select
                    id="dropdown"
                    name="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Trans">Trans</option>
                </select>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Submit
                </button>
            </form>

            <section className="mt-8">
                <h1 className="text-xl font-bold text-center">Submitted Data:</h1>
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white p-4 shadow-md rounded-md mt-4 max-w-md mx-auto"
                    >
                        <p>
                            <strong>First Name:</strong> {item.first_name}
                        </p>
                        <p>
                            <strong>Last Name:</strong> {item.last_name}
                        </p>
                        <p>
                            <strong>Email:</strong> {item.email}
                        </p>
                        <p>
                            <strong>Gender:</strong> {item.gender}
                        </p>
                    </div>
                ))}
            </section>
        </div>
    );
}
