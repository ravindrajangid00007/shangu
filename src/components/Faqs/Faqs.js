import React from 'react'
import './Faqs.css';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
function Faqs() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            <div className="faqsMainBox">
                <div className="faqsHeading">
                    <h1 className="color-yellow">FAQS</h1>
                </div>
                <div className="faqsImageAndBox">
                    <div className="faqsBack"></div>
                    <div className="shanguImage">

                    </div>
                    <div className="faqs">
                        <div className="faqsQuestionsHeading">
                            <h4 className="color-white">Frequently asked <span className="color-yellow">Shanghu Questions</span></h4>
                        </div>
                        <div className="faqsAccordion">
                            <Accordion className="accordionBox accordionUpperCut" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography sx={{ width: '100%', flexShrink: 0 }}>
                                        What is Legends of Shangu?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Legends of Shangu are a collection of digital characters that are randomly generated using artificial intelligence. This collection was created by David Huynh and inspired from the tale of the 12 animals of the zodiac that protected the valley of Shangu on Chinese New Year!
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className="accordionBox" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                >
                                    <Typography sx={{ width: '100%', flexShrink: 0 }}>How many are available?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        7,777 Legends will be released.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className="accordionBox" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary
                                    aria-controls="panel3bh-content"
                                    id="panel3bh-header"
                                >
                                    <Typography sx={{ width: '100%', flexShrink: 0 }}>
                                        What is the mint price?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <p class="MuiTypography-root MuiTypography-body1 css-9l3uo3">Awakening: 0.08 ETH <br />Whitelist 1: 0.1 ETH<br />Whitelist 2: TBD<br /> Main Launch: TBD<br /></p>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className="accordionBox" expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                <AccordionSummary
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <Typography sx={{ width: '100%', flexShrink: 0 }}>How many can be minted in 1 transaction?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        A maximum of 10 Legends can be minted in 1 transaction. You can make up to 6 transactions. Any Legends that are not minted by Awakening or WL members will be available to mint on Main Launch to the general public.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className="accordionBox" expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                <AccordionSummary
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <Typography sx={{ width: '100%', flexShrink: 0 }}>How many can be minted in 1 transaction?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        A maximum of 10 Legends can be minted in 1 transaction. You can make up to 6 transactions. Any Legends that are not minted by Awakening or WL members will be available to mint on Main Launch to the general public.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className="accordionBox" expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                                <AccordionSummary
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <Typography sx={{ width: '100%', flexShrink: 0 }}>How many can be minted in 1 transaction?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        A maximum of 10 Legends can be minted in 1 transaction. You can make up to 6 transactions. Any Legends that are not minted by Awakening or WL members will be available to mint on Main Launch to the general public.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className="accordionBox" expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                                <AccordionSummary
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <Typography sx={{ width: '100%', flexShrink: 0 }}>How many can be minted in 1 transaction?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        A maximum of 10 Legends can be minted in 1 transaction. You can make up to 6 transactions. Any Legends that are not minted by Awakening or WL members will be available to mint on Main Launch to the general public.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className="accordionBox" expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                                <AccordionSummary
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <Typography sx={{ width: '100%', flexShrink: 0 }}>How many can be minted in 1 transaction?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        A maximum of 10 Legends can be minted in 1 transaction. You can make up to 6 transactions. Any Legends that are not minted by Awakening or WL members will be available to mint on Main Launch to the general public.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className="accordionBox" expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                                <AccordionSummary
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <Typography sx={{ width: '100%', flexShrink: 0 }}>How many can be minted in 1 transaction?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        A maximum of 10 Legends can be minted in 1 transaction. You can make up to 6 transactions. Any Legends that are not minted by Awakening or WL members will be available to mint on Main Launch to the general public.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className="accordionBox" expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                                <AccordionSummary
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <Typography sx={{ width: '100%', flexShrink: 0 }}>How many can be minted in 1 transaction?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        A maximum of 10 Legends can be minted in 1 transaction. You can make up to 6 transactions. Any Legends that are not minted by Awakening or WL members will be available to mint on Main Launch to the general public.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className="accordionBox accordionBottomCut" expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                                <AccordionSummary
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <Typography sx={{ width: '100%', flexShrink: 0 }}>How many can be minted in 1 transaction?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        A maximum of 10 Legends can be minted in 1 transaction. You can make up to 6 transactions. Any Legends that are not minted by Awakening or WL members will be available to mint on Main Launch to the general public.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faqs
