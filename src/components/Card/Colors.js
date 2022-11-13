import { useEffect, useState } from "react"


export default function Colors() {

    const [r, setR] = useState(0)
    const [g, setG] = useState(0)
    const [b, setB] = useState(0)
    const [i, setI] = useState(0)
    const [paths, setPaths] = useState([])
    const [done, setDone] = useState(true)

    const random = (a, b) => Math.floor(Math.random() * (b - a) + a)

    const makePath = (from, to, steps) => {
        const a = [];
        const step = (to - from) / steps;

        for (let i = 0; i < steps; i++) {
            a.push(from + (step * i));
        }
        a.push(to)
        return a
    }

    const generate = () => {
        const r_new = random(0, 255)
        const g_new = random(0, 255)
        const b_new = random(0, 255)

        const r_path = makePath(r, r_new, 10)
        const g_path = makePath(g, g_new, 10)
        const b_path = makePath(b, b_new, 10)
        setPaths([r_path, g_path, b_path])
    }

    useEffect(() => {

        if (done) {
            generate()
            setDone(false)
            return
        }

        setTimeout(() => {
            setR(paths[0][i])
            setG(paths[1][i])
            setB(paths[2][i])

            if(i+1 > 10) {
                setDone(true)
                setI(0)
                return
            }
            setI(i + 1)
        }, 50)


    }, [r, g, b, i, done])

    return (
        <div style={{ boxShadow: `0 0 10px 10px rgb(${r}, ${g}, ${b})`, width: '100%', padding: '1rem', borderRadius: '1.5rem', textAlign: 'center', marginTop: '2rem' }}>
            Colors!
        </div>
    )

}