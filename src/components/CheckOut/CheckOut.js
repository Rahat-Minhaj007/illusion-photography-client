import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { UserContext } from "../../App";
import Navigation from "../Shared/Navigation/Navigation";
import "./CheckOut.css";

const CheckOut = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderData,setOrderData] = useState([])

    const { _id } = useParams();
    useEffect(() => {
        fetch(`https://fierce-sea-26565.herokuapp.com/service`)
            .then(res => res.json())
            .then(data => setOrderData(data))

    }, []);

    const orderInfo = orderData.find((or) => (or._id) === (_id));
    



    const onSubmit = (data) => {
        const orderData = {
            name: data.name,
            email: data.email,
            address:data.address,
            phone: data.phone,
            loggedInUser:loggedInUser,
            order:orderInfo,
            orderTime: new Date().toString("dddd, mmmm dS, yyyy, g:i A TT"),
            quantity: 1
        };

        const url = `https://fierce-sea-26565.herokuapp.com/addOrder`;

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderData),
        }) 
        .then(res => res.json())
        .then (data => {
          if(data){
            alert('Your order placed successfully');
          }
        });
    };


    return (
        <div className="checkout">
            <Navigation></Navigation>


            <form className="mt-5 login addBook" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-center pb-2">CHECKOUT</h1>
                <div className="login-input-field">

                    <input
                        name="name"
                        type="text"
                        placeholder="Enter Service Name ..."
                        ref={register}
                    />
                </div>
                <br />
                <div className="login-input-field">

                    <input
                        email="email"
                        type="text"
                        placeholder="Enter Email ..."
                        ref={register}
                    />
                </div>

                <br />
                <div className="login-input-field">

                    <input
                        address="address"
                        type="text"
                        placeholder="Enter Address ..."
                        ref={register}
                    />
                </div>

                <br />

                <div className="login-input-field">

                    <input
                        phone="phone"
                        type="text"
                        placeholder="Enter Phone Number ..."
                        ref={register}
                    />
                </div>

                <br />

              

                <input className="anotherLoginBtnAdmin" type="submit" />


            </form>
        </div>
    );
};

export default CheckOut;