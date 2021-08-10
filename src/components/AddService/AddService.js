import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Navigation from "../Shared/Navigation/Navigation";
import "./AddService.css";

const AddService = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = (data) => {
        console.log(data);
        const serviceData = {
            name: data.name,
            description: data.description,
            price: data.price,
            imageURL: imageURL
        };

        const url = `https://fierce-sea-26565.herokuapp.com/addService`;

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(serviceData),
        }).then((res) => alert("Successfully uploaded"));

    };

    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", "1de815058f5b53f37e6fc69c4c1d88ca");
        imageData.append("image", event.target.files[0]);

        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div className="addService">
            <Navigation></Navigation>


            <form className="mt-5 login addBook" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-center pb-2">ADD SERVICES</h1>
                <div className="login-input-field">

                    <input
                        name="name"
                        type="text"
                        placeholder="Enter Service Name ..."
                        ref={register({ required: true })}


                    />
                    {errors.name && <span style={{ color:"red"}}>This field is required</span>}
                </div>
                <br />

                <div className="login-input-field">

                    <textarea name="description" type="text" placeholder="Enter Description ..." cols="30" rows="10" ref={register({ required: true })}></textarea>
                    {errors.description && <span style={{ color:"red"}}>This field is required</span>}
                </div>
                <br />
                <div className="login-input-field">

                    <input name="price" type="text" placeholder="Add Price ..." ref={register({ required: true })} />
                    {errors.price && <span style={{ color:"red"}}>This field is required</span>}
                </div>
                <br />
                <div className="login-input-field">
                    <h6>Add Service Cover Photo</h6>
                    <input
                        name="exampleRequired"
                        type="file"
                        onChange={handleImageUpload}
                        ref={register({ required: true })}
                    />
                     {errors.exampleRequired && <span style={{ color:"red"}}>This field is required</span>}
                </div>
                <br />

                <input className="anotherLoginBtnAdmin" type="submit" />


            </form>
        </div>
    );
};

export default AddService;