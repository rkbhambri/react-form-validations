import React from 'react';

const Heading = (props) => {
    return (
        <h2 className="heading text-center pt-4">
            {props.heading}
        </h2>
    );
};

export default Heading;
