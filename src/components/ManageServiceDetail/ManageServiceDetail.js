import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './ManageServiceDetail.css';

const ManageServiceDetail = (props) => {
    const { _id, name, price, imageURL } = props.manage;

    const handleDelete = (id) => {
        console.log(id);
        if(window.confirm('Do you want to delete this item?')){

        
                fetch(`https://fierce-sea-26565.herokuapp.com/delete/${id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(result => {
                    console.log('Deleted Successfully');
                })
            }
    }


    return (
        <div className="col-md-4 p-3">
            <div class="card serviceCard" style={{ width: "20rem" }}>
                <img src={imageURL} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5>{name}</h5>
                    <h6>$ {price}</h6>

                    <div className="d-flex justify-content-end pt-2 pb-2">
                        <button onClick={() => handleDelete(_id)} className="btn btn-dark">Delete  <FontAwesomeIcon icon={faTrash} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageServiceDetail;