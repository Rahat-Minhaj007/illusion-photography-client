import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEdit } from '@fortawesome/free-regular-svg-icons';



const ManageOrdersDetail = (props) => {
    
    const [inputStatus, setInputStatus] = useState("");
    const [isToggled,setIsToggled] = useState("false");

    console.log(inputStatus);
    const handleStatus = (e) => {

        setInputStatus(e.target.value);

    }

    const handleUpdateStatus = (id) => {
        const updateStatus = inputStatus;
        const order = { updateStatus, id }

        fetch(`https://fierce-sea-26565.herokuapp.com/update/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
        })
            .then((res) =>  alert("Successfully Updated"))
            
    }

    const { order, orderTime, name, status, _id } = props.manageOrders;

    return (
        

            <div className="card orderCard col-md-3" style={{ width: '18rem' }}>
                <img src={order?.imageURL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h6>Customer: <span style={{ color: 'grey' }}>{name}</span></h6>
                    <h6>Service: <span style={{ color: 'grey' }}>{order?.name}</span></h6>
                    <h6>Total Price: <span style={{ color: 'grey' }}>{order?.price}</span></h6>
                    <h6>Order Time: <span style={{ color: 'grey' }}>{orderTime}</span></h6>
                    <button className={`btn btn-${status === "Pending" ? "danger" : status === "In Progress"? "warning" : "success"}`} >{status}</button> <FontAwesomeIcon style={{fontSize:"20px"}} icon={faEdit} onClick={() => {setIsToggled(!isToggled)}}/>
                    <br />
                    <br />
                    {
                        isToggled && <div> <input type="text" onChange={handleStatus} /> <br /> <button className="btn btn-secondary mt-3" onClick={() => handleUpdateStatus(_id)}>Update</button></div> 
                    }
                </div>
            </div>
   

    );
};

export default ManageOrdersDetail;