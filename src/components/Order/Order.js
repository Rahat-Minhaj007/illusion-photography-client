import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderDetail from '../OrderDetail/OrderDetail';
import Navigation from '../Shared/Navigation/Navigation';
import './Order.css';

const Order = () => {
    const [userOrderedData, setUserOrderedData] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { email } = loggedInUser;
    useEffect(() => {
        fetch(`http://localhost:5055/order`)
            .then(res => res.json())
            .then(data => setUserOrderedData(data))
    }, []);

    const userOrder = userOrderedData.filter((od) => od.loggedInUser.email === email );
  console.log(userOrder);
 
    return (
        <div>
           <Navigation></Navigation>
           <div className="row d-flex justify-content-center">
           {
                   userOrder.map((us) => <OrderDetail data={us} key={us._id}></OrderDetail>)
           }
           </div>

        </div>
    );
};

export default Order;