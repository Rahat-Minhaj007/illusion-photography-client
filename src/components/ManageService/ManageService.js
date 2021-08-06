import React, { useEffect, useState } from 'react';
import ManageServiceDetail from '../ManageServiceDetail/ManageServiceDetail';
import Navigation from '../Shared/Navigation/Navigation';
import './ManageService.css';

const ManageService = () => {
    const [manageServiceData, setManageServiceData] = useState([]);

    useEffect(() => {
        fetch(`https://fierce-sea-26565.herokuapp.com/service`)
            .then(res => res.json())
            .then(data => setManageServiceData(data))

    }, [manageServiceData]);

   
    return (
        <div className="manage-container container">
            <Navigation></Navigation>
            <div className="p-3 row d-flex justify-content-center">
                {
                    manageServiceData.map((mn) => <ManageServiceDetail manage={mn} key={mn._id}></ManageServiceDetail>)
                }
            </div>

        </div>
    );
};

export default ManageService;