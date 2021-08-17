import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './ManageServiceDetail.css';
import swal from 'sweetalert';

const ManageServiceDetail = (props) => {
    const { _id, name, price, imageURL } = props.manage;

    const handleDelete = (id) => {
        console.log(id);
        if(window.swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          })){

        
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
            <div className="card serviceCard" style={{ width: "20rem" }}>
                <img src={imageURL} className="card-img-top" alt="..." />
                <div className="card-body">
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