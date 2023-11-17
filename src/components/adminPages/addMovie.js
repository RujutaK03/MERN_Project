import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../style1.css';
import AdminHeader from './adminHeader';
import Footer from '../footer';
const AddMovie = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        releaseDate: "",
        moviePoster: undefined,
        duration: "",
        cast: [],
        director: [],
        castImages: [],
        directorImages: [],
        genre: [],
        language: []
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

    const handleMultipleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value.split(",") }));
    }

    // const handleMultipleImages = (event, index) => {
    //     const { name } = event.target;
    //     const file = event.target.files[0];
    //     setFormData((prevFormData) => ({
    //         ...prevFormData, [`${name}_${index}`]: file, [`${name}`]: [...(prevFormData[name] || []), file],
    //     }));
    // }

    const handleMultipleImages = (event) => {
        const { name } = event.target;
        const file = event.target.files[0];
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: [
                ...(prevFormData[[name]] || []),
                file,
            ]
        }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(formData);

        try {
            const newMovie = new FormData();

            newMovie.append("title", formData.title);
            newMovie.append("description", formData.description);
            newMovie.append("releaseDate", formData.releaseDate);
            newMovie.append("moviePoster", formData.moviePoster);
            newMovie.append("duration", formData.duration);

            // formData.cast.forEach((member, index) => {
            //     newMovie.append(`cast[${index}]`, member);
            //     if (formData.castImages[index]) {
            //         newMovie.append(`castImages[${index}]`, formData.castImages[index]);
            //     }
            // });

            // formData.director.forEach((member, index) => {
            //     newMovie.append(`director[${index}]`, member);
            //     if (formData.directorImages[index]) {
            //         newMovie.append(`directorImages[${index}]`, formData.directorImages[index]);
            //     }
            // });

            formData.cast.forEach((member, index) => {
                newMovie.append(`cast[${index}]`, member);
                newMovie.append(`castImages`, formData.castImages[index]);
            });

            formData.director.forEach((member, index) => {
                newMovie.append(`director[${index}]`, member);
                newMovie.append(`directorImages`, formData.directorImages[index]);
            });

            formData.genre.forEach((g, index) => {
                newMovie.append(`genres[${index}]`, g);
            });

            formData.language.forEach((lang, index) => {
                newMovie.append(`languages[${index}]`, lang);
            });

            // for (const pair of newMovie.entries()) {
            //     console.log(pair[0] + ', ' + pair[1]);
            // }

            const response = await fetch('http://localhost:8080/add-movie', {
                method: 'POST',
                body: newMovie,
            });

            if (response.ok) {
                alert("Movie Added Successfully!");
            } else {
                console.error('Failed to upload image');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <div class="bg-black">
            <AdminHeader />
            <div class="container my-3">
            <h1 class="mov m-3">Add A Movie</h1>
            <form onSubmit={handleSubmit}>
                <table >
                <tr>
                    <th class="text-white p-3" >
                <label htmlFor="title"> Title of the Movie : </label></th>
                <td ><input type='text' id='title' name='title' value={formData.title} onChange={handleInputChange} required /></td>
                </tr>
                <tr >
                <th class="text-white p-3"><label htmlFor="moviePoster"> Movie Poster : </label></th>
                <td><input type='file' accept="image/*" id='moviePoster' name='moviePoster' onChange={handleImageChange} required />
                </td>
                </tr>
                <tr><th class="text-white p-3">
                <label htmlFor="releaseDate"> Release Date : </label></th>
                <td><input type='date' id='releaseDate' name='releaseDate' value={formData.releaseDate} onChange={handleInputChange} required />
                </td></tr>
                <tr>
                <th class="text-white p-3"><label htmlFor='description'> Description of Movie : </label></th>
                <td><textarea id='description' name='description' value={formData.description} onChange={handleInputChange} />
                </td></tr>
                <tr>
                 <th class="text-white p-3">  <label htmlFor='duration'> Duration : </label></th>
                <td><input type='time' id='duration' name='duration' value={formData.duration} onChange={handleInputChange} />
                </td></tr>
                <tr>
                    <th class="text-white p-3">
                <label htmlFor='genre'> Genre(s) (comma-separated) : </label></th>
                <td><input type='text' id='genre' name='genre' value={formData.genre} onChange={handleMultipleChange} />
                </td></tr>
                <tr>
                    <th class="text-white p-3">
                <label htmlFor='language'> Language(s) (comma-separated) : </label></th>
                <td>
                <input type='text' id='language' name='language' value={formData.language} onChange={handleMultipleChange} />
            </td></tr>
            <tr>
                <th class="text-white p-3">
                <label htmlFor='cast'> Cast (comma-separated) : </label>
            </th>
            <td>
                <input type='text' id='cast' name='cast' value={formData.cast} onChange={handleMultipleChange} />
            </td></tr>
                {formData.cast.map((member, index) => (
                    <div key={index}>
                        <tr>
                        <th class="text-white p-3"><label htmlFor={`castImages${index}`}> Image for {member} : </label>
                        </th>
                        <td>
                            <input type='file' accept='image/*' id={`castImages${index}`} name='castImages' onChange={(event) => handleMultipleImages(event)} />
                        </td>
                        </tr>
                    </div>
                ))}
                    <tr>
                        <th class="text-white p-3">
                <label htmlFor='director'> Director(s) (comma-separated) : </label></th>
                <td>
                <input type='text' id='director' name='director' value={formData.director} onChange={handleMultipleChange} />
            </td>
            </tr>
                {formData.director.map((member, index) => (
                    <div key={index}>
                        <tr>
                            <th class="text-white p-3">
                        <label htmlFor={`directorImages${index}`}> Image for {member} : </label></th>
                        <td>
                        <input type='file' accept='image/*' id={`directorImages${index}`} name='directorImages' onChange={(event) => handleMultipleImages(event)} />
                    </td>
                    </tr>
                    </div>
                ))}
                </table>
                <button type='submit' class="add rounded m-3"><b> Add Movie</b> </button>
            </form>
            {/* <input type="file" accept="image/*" onChange={handleImageChange} />
            <button onClick={handleImageUpload}>Upload Image</button> */}
        </div>
        <Footer />
        </div>

    );
};

export default AddMovie;
