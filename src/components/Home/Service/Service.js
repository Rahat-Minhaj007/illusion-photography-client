import React, { useEffect, useState } from 'react';
import './Service.css';

const Service = () => {
    const [serviceData,setServiceData] = useState ([]);
 
    useEffect(() => {
        fetch(`http://localhost:5055/service`)
        .then(res => res.json())
        .then (data => setServiceData(data))
         
    },[]);

    console.log(serviceData);
    return (
        <div className="service">
            <h1 className="text-center p-3">SERVICES</h1>
            
        </div>
    );
};

export default Service;