//import { useEffect } from "react";


const Card = ({ children, className, style }) => {

    return (
        <div style={style} className={`card ${className}`}>
            {children}
        </div>
    )
}

export default Card;