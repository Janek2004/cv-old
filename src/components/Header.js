import { useEffect, useRef } from "react";

const FlyingLetter = ({ letter, id }) => {

    const letterRef = useRef();

    useEffect(() => {
        return;
        let playing = false;
        let isHover = false;
        letterRef.current.addEventListener('mouseover', () => {
            letterRef.current.className = 'letter letterUp';
            playing = true;
            isHover = true;
            setTimeout(() => {
                playing = false;
                if (!isHover) letterRef.current.className = 'letter letterDown';
            }, 100);
        })
        letterRef.current.addEventListener('mouseout', () => {
            isHover = false;
            if (!playing) letterRef.current.className = 'letter letterDown';
            setTimeout(() => {
                letterRef.current.className = 'letter';
            }, 200);
        })

        let interval1;

        setTimeout(() => {
            interval1 = setInterval(() => {
                letterRef.current.className = 'letter letterUp';
                setTimeout(() => {
                    letterRef.current.className = 'letter letterDown';
                    setTimeout(() => {
                        letterRef.current.className = 'letter';
                    }, 100)
                }, 200);
            }, 5000)
        }, id * 25)

        return () => {
            clearInterval(interval1);
        }

    }, [id])

    return (
        <span className="letter" style={{ animationDelay: `${(id * 50) / 1000}s` }} ref={letterRef}>{letter === ' ' ? ' ' : letter}</span>
    )
}

const FlyingLetters = ({ text }) => {

    const letters = text.split("")
    return (
        <>
            <span>
                {letters.map((e, i) => <FlyingLetter key={i} id={i + 1} letter={e} />)}
            </span>
        </>
    )
}

const ScrollDownForMore = () => {
    return (
        <div className="scroll-down">
            <a href="#cards">Scroll down</a>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="scroll-down-icon" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
            </svg>
        </div>
    )
}

const Header = () => {

    return (
        <header>
            <div className="header-bg">
                <h1>
                    Welcome
                </h1>
                <h2>
                    To my universe!
                </h2>
                <h3>
                    <FlyingLetters text='My name is Janek, and this is my knowledge about HTML, CSS, JS and ReactJS!' />
                </h3>
                <ScrollDownForMore />
            </div>
        </header>
    )
}

export default Header;