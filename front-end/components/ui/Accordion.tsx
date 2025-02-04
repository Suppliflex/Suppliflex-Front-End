import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQAccordion: React.FC = () => {
  return (
    <div className="w-[686.29px] h-[672.44px]">
      <Accordion
        sx={{
          bgcolor: '#000000',
          color: 'white',
          fontWeight: 600,
          // borderTop: 0.75,
          borderBottom: 1.5,
          gap: 65.11,
          // paddingBottom: 33.68,
          // paddingTop: 33.68,
          // paddingRight: 29.94,
          // paddingLeft: 29.94,
        }}
      >
        <AccordionSummary
          className="text-Poppins w-[600] size-[23.95] leading-[35.92]"
          expandIcon={<ExpandMoreIcon className="text-[#F4F7FF]" />}
        >
          What financial records can I access ?
        </AccordionSummary>
        <AccordionDetails sx={{ fontStyle: 'Nunito Sans', fontWeight: 400, color: '#787878' }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere facilis nesciunt commodi
          incidunt itaque natus saepe quae. Consequuntur aut modi amet autem officia ad itaque dicta
          recusandae quia dolores. Qui?
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          fontStyle: 'Poppins',
          bgcolor: '#000000',
          color: 'white',
          fontWeight: 600,
          borderBottom: 1.5,
          gap: 65.11,
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon className="text-white" />}>
          Can I track all modes of shipping?
        </AccordionSummary>
        <AccordionDetails sx={{ fontStyle: 'Nunito Sans', fontWeight: 400, color: '#787878' }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat cumque earum aliquid
          officia incidunt libero ducimus voluptate temporibus eveniet voluptatibus, culpa harum?
          Eligendi error magnam culpa, deserunt veritatis totam ea!
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          fontStyle: 'Poppins',
          bgcolor: '#000000',
          color: 'white',
          fontWeight: 600,
          borderBottom: 1.5,
          gap: 65.11,
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon className="text-white" />}>
          How do I contact customer support?
        </AccordionSummary>
        <AccordionDetails sx={{ fontStyle: 'Nunito Sans', fontWeight: 400, color: '#787878' }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat cumque earum aliquid
          officia incidunt libero ducimus voluptate temporibus eveniet voluptatibus, culpa harum?
          Eligendi error magnam culpa, deserunt veritatis totam ea!
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          fontStyle: 'Poppins',
          bgcolor: '#000000',
          color: 'white',
          fontWeight: 600,
          borderBottom: 1.5,
          gap: 65.11,
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon className="text-white" />}>
          How can I request demo?
        </AccordionSummary>
        <AccordionDetails sx={{ fontStyle: 'Nunito Sans', fontWeight: 400, color: '#787878' }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat cumque earum aliquid
          officia incidunt libero ducimus voluptate temporibus eveniet voluptatibus, culpa harum?
          Eligendi error magnam culpa, deserunt veritatis totam ea!
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          fontStyle: 'Poppins',
          bgcolor: '#000000',
          color: 'white',
          fontWeight: 600,
          borderBottom: 1.5,
          gap: 65.11,
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon className="text-white" />}>
          What is the cost ?
        </AccordionSummary>
        <AccordionDetails sx={{ fontStyle: 'Nunito Sans', fontWeight: 400, color: '#787878' }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat cumque earum aliquid
          officia incidunt libero ducimus voluptate temporibus eveniet voluptatibus, culpa harum?
          Eligendi error magnam culpa, deserunt veritatis totam ea!
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FAQAccordion;
