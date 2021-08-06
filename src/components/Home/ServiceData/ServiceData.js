import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceData.css';

const ServiceData = (props) => {
    const { _id, name, price, imageURL } = props.service;
    return (
        <div className="col-md-4 p-3">
            <div class="card serviceCard" style={{ width: "24rem" }}>
                <img src={imageURL} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5>{name}</h5>
                    <h6>$ {price}</h6>

                    <div className="d-flex justify-content-between pt-2 pb-2">
                        <Link to={`/serviceMore/${_id}`}>
                            <button className="btn btn-secondary">More..</button>
                        </Link>
                        <Link to={`/checkOut/${_id}`}>
                        <button className="btn btn-secondary">Buy</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceData;