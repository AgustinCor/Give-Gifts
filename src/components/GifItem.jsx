import React from 'react';

const GifItem = ({image}) => {
    return (
        <div className="card">
            <img src={image.img} />
            <p>{image.title}</p>
        </div>
      
    );
};

export default GifItem;