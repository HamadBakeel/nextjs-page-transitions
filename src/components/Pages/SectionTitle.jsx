import React from 'react';

const SectionTitle = ({ children }) => {
    return React.cloneElement(children, {
        className: children.props.className + " text-3xl lg:text-5xl lg:leading-tight font-bold"
    });
};

export default SectionTitle;