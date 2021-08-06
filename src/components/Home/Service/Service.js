import React, { useEffect, useState } from 'react';
import ServiceData from '../ServiceData/ServiceData';
import './Service.css';

const Service = () => {
    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {
        fetch(`https://fierce-sea-26565.herokuapp.com/service`)
            .then(res => res.json())
            .then(data => setServiceData(data))

    }, []);

   
    return (
        <div className="service-container container" id="service">
            <h1 className="text-center p-3">SERVICES</h1>
            <div className="p-3 row">
                {
                    serviceData.map((sr) => <ServiceData service={sr} key={sr._id}></ServiceData>)
                }
            </div>

        </div>
    );
};

export default Service;