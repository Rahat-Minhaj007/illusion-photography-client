import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../Shared/Navigation/Navigation';
import './ServiceMore.css';

const ServiceMore = () => {
    const [serviceMoreData, setServiceMoreData] = useState([]);

    const { _id } = useParams();

    console.log(_id);

    useEffect(() => {
        fetch(`https://fierce-sea-26565.herokuapp.com/service`)
            .then(res => res.json())
            .then(data => setServiceMoreData(data))

    }, []);

    const serviceMoreDataFind = serviceMoreData.find((mr) => (mr._id) === (_id));
    
    


    return (
        <div className="serviceMore">
            <Navigation></Navigation>
            <div className="p-5 row ServiceMoreContent">
                <div className="col-md-5">
                    <img style={{width:"100%"}} src={ serviceMoreDataFind?.imageURL} alt="" />
                </div>
                <div className="col-md-7">
                   <h2>{ serviceMoreDataFind?.name}</h2>
                   <p>{ serviceMoreDataFind?.description}</p>
                   <h3>$ { serviceMoreDataFind?.price}</h3>
                </div>
            </div>
        </div>
    );
};

export default ServiceMore;