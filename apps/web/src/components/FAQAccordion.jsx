
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

function FAQAccordion({ faqs }) {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {faqs.map((faq, index) => (
        <AccordionItem 
          key={index} 
          value={`item-${index}`}
          className="glassmorphism rounded-xl px-6 border-none data-[state=open]:border-primary/50 data-[state=open]:shadow-[0_0_20px_rgba(0,168,107,0.1)] transition-all duration-300"
        >
          <AccordionTrigger className="text-left font-heading font-semibold text-lg text-foreground hover:text-primary hover:no-underline py-5">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default FAQAccordion;
