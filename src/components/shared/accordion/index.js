import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.

import 'react-accessible-accordion/dist/fancy-example.css';
import '../../../styles/accordion.css';

const AccordionComponent = ({ children, acordions = [], body = {}, getContent = () => {} }) => {
    const accordionsTabs = acordions && acordions.map((accdn, index) => {
    // const body = getContent(accdn.id)
    //     console.log(body.props.children)
   return (
        <Accordion key={index}>
            <AccordionItem onClick={() => getContent(accdn.id)}>
                <AccordionItemTitle>
                    <h5>{accdn.title} </h5>
                    <h6>{accdn.subtitle}</h6>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>{children}</p>
                </AccordionItemBody>
            </AccordionItem>
        </Accordion>
    ) 
    });
   return accordionsTabs;
}

export default AccordionComponent;
