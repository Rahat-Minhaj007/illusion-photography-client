import React from 'react';

const ManageOrdersDetail = (props) => {
    const { order, orderTime, name } = props.manageOrders;
    return (
        <div className="col-md-4 pt-5">

            <div class="card orderCard" style={{ width: '18rem' }}>
                <img src={order?.imageURL} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h6>Customer: <span style={{ color: 'grey' }}>{name}</span></h6>
                    <h6>Service: <span style={{ color: 'grey' }}>{order?.name}</span></h6>
                    <h6>Total Price: <span style={{ color: 'grey' }}>{order?.price}</span></h6>
                    <h6>Order Time: <span style={{ color: 'grey' }}>{orderTime}</span></h6>
                    <button class="btn btn-secondary">Pending</button>
                </div>
            </div>
        </div>

    );
};

export default ManageOrdersDetail;