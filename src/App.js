import Header from "./components/Header";
import Card from "./components/Card";
import { useEffect, useRef, useState } from "react";
import Animated from "./components/Animated";

function App() {

    const appRef = useRef();
    const [scrollValue, setScrollValue] = useState(0);

    const scrolling = () => {
        if (appRef.current.scrollTop === 0) setScrollValue(0);
        if (appRef.current.scrollTop >= window.innerHeight / 2) setScrollValue(1) //setTimeout(() => setScrollValue(1), 500);
    }
    useEffect(() => {

        appRef.current.addEventListener('scroll', scrolling);

    }, [])

    return (
        <div className="app" ref={appRef}>
            <Header />
            <section id="cards">
                <div className='display-flex padding-cards'>
                    <Animated className={`${scrollValue === 1 ? 'slideInLeft' : 'animated'}`}>
                        <Card>
                            <Card.Content>
                                <Card.Header>
                                    HTML
                                </Card.Header>
                                <Card.Body>
                                    My knowledge about HTML is great. I've made 5 commercial websites using Bootstrap 4.6/5.2.
                                </Card.Body>
                            </Card.Content>
                        </Card>
                    </Animated>
                    <Animated className={`${scrollValue === 1 ? 'slideInRight' : 'animated'}`}>
                        <Card>
                            <Card.Content>
                                <Card.Header>
                                    Javascript
                                </Card.Header>
                                <Card.Body>
                                    Javascript, mrrrr. Best language to learn.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Card.Body>
                            </Card.Content>
                        </Card>
                    </Animated>
                </div>
            </section>
            <main>
                
            </main>
        </div >
    );
}

export default App;
