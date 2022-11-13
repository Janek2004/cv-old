import Header from "./components/Header";
import Card from "./components/Card";
import { useEffect, useRef, useState } from "react";
import Animated, { calculatePosition } from "./components/Animated";
import Colors from "./components/Card/Colors";
import Hello from "./components/Hello";
import TicTacToe from "./components/TicTacToe";

function App() {

    const appRef = useRef();
    const [scrollValue, setScrollValue] = useState(0);

    const scrolling = () => {

        setScrollValue(appRef.current.scrollTop)
    }

    const calculateScrollingHandler = (from, to, addValue = 0, multiplier = 1) => {
        return addValue + multiplier * calculatePosition(
            from,
            to,
            scrollValue)
    }

    useEffect(() => {

        appRef.current.addEventListener('scroll', scrolling);

    }, [])

    return (
        <div className="app" ref={appRef}>
            <Hello />
            <Header />
            <section>
                <div id="cards" className="cards-container">
                    <div className='display-flex padding-cards'>
                        <Animated style={{
                            transform: `translate3d(${calculateScrollingHandler(window.innerHeight * 2,
                                window.innerHeight * 2.3, -100)}%, 0, 0)`,
                            opacity: `${0.01 * calculatePosition(window.innerHeight * 2,
                                window.innerHeight * 2.3, scrollValue)}`
                        }}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>
                                        HTML
                                    </Card.Header>
                                    <Card.Body>
                                        I made 5 commercial websites using Bootstrap 4.6/5.2.
                                        <br />
                                        Uses:
                                        <ul>
                                            <li>HTML5 tags</li>
                                            <li>give id to every important element</li>
                                            <li>commenting on things that are harder to understand for others</li>
                                            <li>using flex, elements, positioning, animations and more!</li>
                                        </ul>
                                    </Card.Body>
                                </Card.Content>
                            </Card>
                        </Animated>
                        <Animated style={{
                            transform: `translate3d(${calculateScrollingHandler(window.innerHeight * 2,
                                window.innerHeight * 2.4, 100, -1)}%, 0, 0)`,
                            opacity: `${0.01 * calculatePosition(window.innerHeight * 2,
                                window.innerHeight * 2.4, scrollValue)}`
                        }}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>
                                        Javascript
                                    </Card.Header>
                                    <Card.Body>
                                        Simple language for me. No problems understanding functionality. Familiarity with most of the usable elements.
                                        <Colors />
                                    </Card.Body>
                                </Card.Content>
                            </Card>
                        </Animated>
                        <Animated style={{
                            transform: `scale(${calculateScrollingHandler(window.innerHeight * 2,
                                window.innerHeight * 2.5, 0, 0.01)})`,
                            opacity: `${0.01 * calculatePosition(window.innerHeight * 2,
                                window.innerHeight * 2.5, scrollValue)}`
                        }}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>
                                        Bootstrap
                                    </Card.Header>
                                    <Card.Body>
                                        My bootstrap level is intermediate. I'm using positioning, grid/flex, icons and much more by heart!
                                        <br />Here's a list of my commercial projects:
                                        <ul style={{ lineHeight: "180%" }}>
                                            <li>
                                                <a className="link-blue" href="https://xpolix.github.io/firmy/" target='_blank'>Firmy 1</a>
                                                <span> </span>
                                                <a className="link-blue" href="https://xpolix.github.io/firmy2/" target='_blank'>Firmy 2</a>
                                                <span> </span>
                                                <a className="link-blue" href="https://xpolix.github.io/firmy3/" target='_blank'>Firmy 3</a>
                                                <span> </span>
                                                <a className="link-blue" href="https://xpolix.github.io/firmy4/" target='_blank'>Firmy 4</a>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                </Card.Content>
                            </Card>
                        </Animated>

                        <Animated style={{
                            transform: `translate3d(0, ${calculateScrollingHandler(window.innerHeight * 2,
                                window.innerHeight * 2.6, 100, -1)}%, 0)`,
                            opacity: `${0.01 * calculatePosition(window.innerHeight * 2,
                                window.innerHeight * 2.6, scrollValue)}`
                        }}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>
                                        ReactJS
                                    </Card.Header>
                                    <Card.Body>
                                        Very good knowledge of ReactJS! Using function components, useState(), useRef(), forwardRef, contexts and much more!
                                        <br />
                                        I'm also currently working on a mobile app using ReactNative, so I like two of them and have pretty good experience.
                                    </Card.Body>
                                </Card.Content>
                            </Card>
                        </Animated>
                    </div>
                </div>
            </section>
            <Animated style={{
                transform: `translate3d(${calculateScrollingHandler(window.innerHeight * 3,
                    window.innerHeight * 3.75, -100)}%, 0, 0)`
            }}>
                <TicTacToe />
            </Animated>
            <aside>
                <a href="mailto:jan.zagorski04@gmail.com">Contact: jan.zagorski04@gmail.com</a>
                <p>Github: <a target='_blank' href="https://github.com/Janek2004">Janek2004 - click (new tab)</a></p>
                <p>Github (old): <a target='_blank' href="https://github.com/xpolix">(new tab)</a></p>
            </aside>
        </div >
    );
}

export default App;
