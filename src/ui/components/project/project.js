import './project.css'
import {Accordion, AccordionDetails, Avatar, Chip, Grid, Zoom} from "@material-ui/core";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import GitHubIcon from '@material-ui/icons/GitHub';
import java from '../../../assets/logos/java-logo.svg'
import javascript from '../../../assets/logos/javascript-logo.svg'
import materialui from '../../../assets/logos/material-ui.svg'
import python from '../../../assets/logos/python-logo.svg'
import reactjs from '../../../assets/logos/reactjs-logo.svg'
import ScrollAnimation from 'react-animate-on-scroll';
import Fade from 'react-reveal/Fade';
import "animate.css/animate.min.css";
import {ExpandMoreOutlined} from "@material-ui/icons";



const Project = (props) => {

    return (
        <div className={"project"}>
            {/*<ScrollAnimation animateIn='animate__fadeInRight' animateOut='animate__fadeOutRight' offset={0}>*/}
                <Accordion>
                    <AccordionSummary className={'accordion-summary'} expandIcon={ <ExpandMoreOutlined />} >
                        <Grid container>
                            <Grid item xs={8} className={'main-title'}>
                                <h3 className={'title-typography'}>{props.data.title}</h3>
                            </Grid>
                            <Grid item xs={4} alignItems={'center'}>
                                <div className={'end-title'} align={'center'} >
                                    {props.data.endTitle}
                                </div>

                            </Grid>
                            <Grid item xs={8} className={'sub-title'}>
                                {props.data.subtitle}
                            </Grid>
                            <Grid item xs={4} className={'date'}>
                                <i>{props.data.date}</i>
                            </Grid>
                        </Grid>
                    </AccordionSummary>
                    <AccordionDetails className={'accordion-details'}>
                        <div className={'project-details'}>
                            <div className={'details-text-box'}>
                                <p>{props.data.details}</p>
                            </div>
                            <div className={'media'}>
                                {props.data.media}
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            {/*</ScrollAnimation>*/}
        <br/>
        </div>
    )
}

export default Project