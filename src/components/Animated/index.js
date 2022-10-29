import React, { cloneElement } from "react";


const Animated = ({ children, className }) => {

    return (
        <>
            {cloneElement(children, { className: className })}
        </>
    )
}

export default Animated;