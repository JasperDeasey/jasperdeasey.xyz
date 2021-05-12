import './landing.css'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import React from "react";
import 'react-slideshow-image/dist/styles.css'
import TextTransition, {presets} from "react-text-transition";
import ScrollAnimation from "react-animate-on-scroll";
import Typist from 'react-typist';
import {Link} from "@material-ui/core";

const TEXTS = [
    "Jasper",
    "a UBC student",
    "studying Finance and Computer Science",
    "new to this 'coding' thing",
    "not just a nerd...",
    "an avid skier",
    "learning to golf",
];

const Landing= () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() =>
                setIndex(index => index + 1),
            3500 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div className={'landing'}>
            <div className={'landing-text'}>
                <p className={'introduction'}>
                    <Typist avgTypingDelay={200} cursor={{
                        show: true,
                        blink: true,
                        element: '|',
                        hideWhenDone: false,
                    }}>
                        Hi, I'm...
                    </Typist>
                </p>
                <ScrollAnimation animateIn='animate__fadeIn' animateOut='animate__fadeOut' offset={200} delay={3500} animateOnce={true}>
                    <div className={'me'}>
                        <p className={'changing-introduction'}>
                            <TextTransition className={'changing-text'}
                                            text={ TEXTS[index % TEXTS.length] }
                                            springConfig={ presets.default }
                                            inline={true}
                                            delay={3500}
                            />
                        </p>
                    </div>
                </ScrollAnimation>
                <div className={'spacer'}/>
                <div className={'bounce'}>
                    <ScrollAnimation animateIn='animate__fadeIn' offset={0} delay={4000} animateOnce={true}>
                        <Link className={'arrow'} href={'#about'}>
                            <KeyboardArrowDownIcon className={'down-icon'} fontSize="large"/>
                        </Link>
                    </ScrollAnimation>
                </div>
            </div>

        </div>
    )
}

export default Landing