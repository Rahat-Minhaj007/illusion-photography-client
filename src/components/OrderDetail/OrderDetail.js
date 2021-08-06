import React from 'react';
import './OrderDetail.css';

const OrderDetail = (props) => {
    const { order, orderTime } = props.data;
    return (
        <div className="col-md-3 pt-5">
            <div class="card orderCard" style={{ width: '18rem' }}>
                <img src={order?.imageURL} class="card-img-top" alt="..." />
                <div class="card-body">
                     <h6>Service: <span style={{color: 'grey'}}>{order?.name}</span></h6>
                     <h6>Total Price: <span style={{color: 'grey'}}>{order?.price}</span></h6>
                     <h6>Order Time: <span style={{color: 'grey'}}>{orderTime}</span></h6>
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;