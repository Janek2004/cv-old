import React, { cloneElement } from "react";


const Animated = ({ children, className, style }) => {

    return (
        <>
            {cloneElement(children, { className: className, style: style })}
        </>
    )
}

export const calculatePosition = (from, to, value) => {
    // Example:
    // to = 100%
    // value = x > from || from
    //
    // 50, 100, 75
    // 100 = 100
    // 75 = x
    // x = (75 - 50) * 100 / (100 - 50)
    // x = (value - from) * 100 / (to - from)

    if (value < from) return 0

    let perc_val = (value - from) * 100 / (to - from)

    if (perc_val < 100) return perc_val
    else return 100
}

export default Animated;