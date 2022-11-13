import { useEffect, useState } from "react";

const StartGame = ({ onClick }) => {
    return (
        <a style={{ fontSize: '48px', cursor: 'pointer' }} onClick={() => onClick()}>Play again</a>
    )
}

const Win = ({ text, restart }) => {

    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', flexDirection: 'column', zIndex: '15', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.75)' }}>
            <a style={{ fontSize: '64px' }}>{text.toUpperCase()}!</a>
            <StartGame onClick={restart} />
        </div>
    )

}

const random = (a, b) => Math.floor(Math.random() * (b - a + 1) + a)

let whosMoveIs = 'bot'

const X = () => {
    return (
        <div className="game-x">
            <div className="game-x-rectangle"></div>
            <div className="game-x-rectangle" style={{ transform: 'rotate(-45deg)' }}></div>
        </div>
    )
}
const Circle = () => {
    return (
        <div className="game-circle">
            <div className="game-circle-inside"></div>
        </div>
    )
}

const Square = ({ margin, move, setMove, id }) => {

    const click = () => {
        if (!move.d) setMove(id)
    }

    //console.log(move)

    return (
        <div onClick={click} className={`game-square ${!move.d ? 'game-square-clickable' : ''} ${margin ? 'game-square-margin-bottom' : ''}`}>
            {move.c ? <Circle /> : null}
            {move.x ? <X /> : null}
        </div>
    )
}

const TicTacToe = ({style}) => {

    const [moves, setMoves] = useState({
        "1": { d: false, x: null, c: null },
        "2": { d: false, x: null, c: null },
        "3": { d: false, x: null, c: null },
        "4": { d: false, x: null, c: null },
        "5": { d: false, x: null, c: null },
        "6": { d: false, x: null, c: null },
        "7": { d: false, x: null, c: null },
        "8": { d: false, x: null, c: null },
        "9": { d: false, x: null, c: null },
    })
    const [win, setWin] = useState(false);
    const [wh, setWh] = useState([window.innerWidth > window.innerHeight ? window.innerHeight - window.innerHeight * 0.1 : window.innerWidth - window.innerWidth * 0.1,
    window.innerWidth > window.innerHeight ? window.innerHeight - window.innerHeight * 0.1 : window.innerWidth - window.innerWidth * 0.1])

    const restart = () => {
        setWin(false)
        setMoves({
            "1": { d: false, x: null, c: null },
            "2": { d: false, x: null, c: null },
            "3": { d: false, x: null, c: null },
            "4": { d: false, x: null, c: null },
            "5": { d: false, x: null, c: null },
            "6": { d: false, x: null, c: null },
            "7": { d: false, x: null, c: null },
            "8": { d: false, x: null, c: null },
            "9": { d: false, x: null, c: null },
        })
    }

    const setMove = (idSet) => {

        if (!moves[idSet].d && whosMoveIs === 'user') {

            whosMoveIs = 'bot'

            let new_moves = { ...moves }
            new_moves[idSet] = { d: true, x: true, c: null }

            setMoves(new_moves)
        }
    }

    const checkShapes = (shape, a, b, c) => {
        if (moves[a][shape] && moves[b][shape] && moves[c][shape]) return true
        else return false
    }

    const checkIfWin = (shape) => {
        if (moves['1'].d && moves['2'].d && moves['3'].d && checkShapes(shape, '1', '2', '3')) { setWin(shape); return true }
        if (moves['4'].d && moves['5'].d && moves['6'].d && checkShapes(shape, '4', '5', '6')) { setWin(shape); return true }
        if (moves['7'].d && moves['8'].d && moves['9'].d && checkShapes(shape, '7', '8', '9')) { setWin(shape); return true }

        if (moves['1'].d && moves['4'].d && moves['7'].d && checkShapes(shape, '1', '4', '7')) { setWin(shape); return true }
        if (moves['2'].d && moves['5'].d && moves['8'].d && checkShapes(shape, '2', '5', '8')) { setWin(shape); return true }
        if (moves['3'].d && moves['6'].d && moves['9'].d && checkShapes(shape, '3', '6', '9')) { setWin(shape); return true }

        if (moves['1'].d && moves['5'].d && moves['9'].d && checkShapes(shape, '1', '5', '9')) { setWin(shape); return true }
        if (moves['3'].d && moves['5'].d && moves['7'].d && checkShapes(shape, '3', '5', '7')) { setWin(shape); return true }

        for (const e in moves) {
            if (!moves[e].d) return false
        }
        setWin('Draw')
        return true
    }

    const makeMoveBot = () => {

        let new_moves = { ...moves }

        const possible_moves = []

        for (const e in new_moves) {
            if (!new_moves[e].d) possible_moves.push(e)
        }
        const move = random(0, possible_moves.length - 1)

        new_moves[possible_moves[move]] = { d: true, c: true, x: null }

        setMoves(new_moves)
        whosMoveIs = 'user'

    }

    const resizeEvent = () => {
        if (window.innerWidth > window.innerHeight) setWh([window.innerHeight - window.innerHeight * 0.1, window.innerHeight - window.innerHeight * 0.1])
        else setWh([window.innerWidth - window.innerWidth * 0.1, window.innerWidth - window.innerWidth * 0.1])

    }

    useEffect(() => {
        window.addEventListener('resize', resizeEvent)

        if (whosMoveIs === 'bot') {
            if (!checkIfWin('x')) makeMoveBot()
        }
        else checkIfWin('c')

        return () => {
            window.removeEventListener('resize', resizeEvent)
        }
    })

    return (
        <main style={style}>
            <a className="ttt-title">TicTacToe</a>
            <div className="playboard" style={{ width: wh[0], height: wh[1] }}>
                {win ? <Win text={win === 'c' ? 'circle won' : win === 'x' ? 'X won' : win} restart={restart} /> : null}
                <Square margin setMove={setMove} id="1" move={moves["1"]} />
                <Square margin setMove={setMove} id="2" move={moves["2"]} />
                <Square margin setMove={setMove} id="3" move={moves["3"]} />
                <Square margin setMove={setMove} id="4" move={moves["4"]} />
                <Square margin setMove={setMove} id="5" move={moves["5"]} />
                <Square margin setMove={setMove} id="6" move={moves["6"]} />
                <Square setMove={setMove} id="7" move={moves["7"]} />
                <Square setMove={setMove} id="8" move={moves["8"]} />
                <Square setMove={setMove} id="9" move={moves["9"]} />
            </div>
        </main>
    )
}

export default TicTacToe;