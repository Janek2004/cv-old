import { useEffect, useState } from "react";


const Hello = () => {


    const [visible, setVisible] = useState(true);


    useEffect(() => {

        setTimeout(() => setVisible(!visible), 750)

    })

    return (
        <div className="hello-container">

            <div className="hello-h1">
                {visible ? 'Hello|' : 'Hello'}
            </div>

        </div>
    )
}


export default Hello;