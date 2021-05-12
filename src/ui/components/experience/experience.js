import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

const Experience = (props) => {

    return (
        <div className={'experience-div'}>
            <Accordion className={'experience-accordion'}>
                <AccordionSummary className={'experience-summary'}>
                    <div className={'experience-image'}> {props.data.image} </div>
                    <div className={'experience-title'}> {props.data.title} </div>
                </AccordionSummary>
                <AccordionDetails className={'experience-details'}>
                    {props.data.details}
                </AccordionDetails>
            </Accordion>
            <br/>
        </div>
    )
}

export default Experience