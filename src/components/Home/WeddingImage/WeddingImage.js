import React from 'react';

const WeddingImage = (props) => {
    const {img} = props.image1;
    console.log(img);
    return (
        <div className="col-md-4 pt-3 pb-3">
            <img style={{width:"100%"}} src={img} alt="" />
            
        </div>
    );
};

export default WeddingImage;