import React from 'react';

const Titleheading = ({title}) => {
    return (
        <div className="title_style">
           <h4 style={{marginTop:"15px",fontSize:"30px"}}>{title}</h4>
      </div>
    );
};

export default Titleheading;