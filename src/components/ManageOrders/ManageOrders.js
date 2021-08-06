import React, { useEffect, useState } from 'react';
import ManageOrdersDetail from '../ManageOrdersDetail/ManageOrdersDetail';
import ManageServiceDetail from '../ManageServiceDetail/ManageServiceDetail';
import Navigation from '../Shared/Navigation/Navigation';


const ManageOrders = () => {
    const [manageOrderData, setManageOrderData] = useState([]);

    useEffect(() => {
        fetch(`https://fierce-sea-26565.herokuapp.com/order`)
            .then(res => res.json())
            .then(data => setManageOrderData(data))

    }, []);

   
    return (
        <div>
            <Navigation></Navigation>
<div className="container ">
            
            <div className="row p-3 ">
                {
                    manageOrderData.map((mn) => <ManageOrdersDetail manageOrders={mn} key={mn._id}></ManageOrdersDetail>)
                }
            </div>

        </div>
        </div>
        
    );
};

export default ManageOrders;