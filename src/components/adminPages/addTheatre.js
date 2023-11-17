import React from 'react';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../style1.css';
import AdminHeader from './adminHeader';
import Footer from '../footer';

const AddTheatre = () => {
    const [formData, setFormData] = useState({
        name: '',
        image: undefined,
        location: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleImageChange = (event) => {
        const { name } = event.target;
        const file = event.target.files[0];
        setFormData((prevFormData) => ({ ...prevFormData, [name]: file }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const newTheatre = new FormData();
            newTheatre.append("name", formData.name);
            newTheatre.append("image", formData.image);
            newTheatre.append("location", formData.location);

            const response = await fetch('https://mern-project-deployment-1.onrender.com/add-theatre', {
                method: 'POST',
                body: newTheatre,
            });

            if (response.ok) {
                alert("Theatre Added Successfully!");
            } else {
                console.error('Failed to add new theatre');
            }
        } catch (error) {
            console.error('Error :', error);
        }
    }

    return (
        <div class="bg-black">
            <AdminHeader />
            <div class="container my-3">
            <h1 class="mov"> Add a Theatre </h1>
            <form onSubmit={handleSubmit}>
            <table class="m-3">
                <tr>
                <th class="text-white p-3">
                <label htmlFor='name'> Theatre Name : </label>
                </th>
                <td>
                <input type='text' id='name' name='name' value={formData.name} onChange={handleInputChange} />
                </td>
                </tr>
                <tr>
                <th class="text-white p-3">
                <label htmlFor='image'> Theatre Image : </label>
                </th>
                <td>
                <input type='file' accpet='image/*' id='image' name='image' onChange={handleImageChange} />
                </td>
            </tr><tr>
                <th class="text-white p-3">
                <label htmlFor='name'> Theatre Location : </label>
                </th>
                <td>
                <input type='text' id='location' name='location' value={formData.location} onChange={handleInputChange} />
                </td>
            </tr>
            </table>
                <button class="add rounded" type='submit' onSubmit={handleSubmit}><b> Add Theatre </b></button>
            </form>
        </div>
            <Footer />
        </div>
    )
}

export default AddTheatre;
