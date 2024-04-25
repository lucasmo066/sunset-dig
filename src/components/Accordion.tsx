import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  interface AccordionItem {
    value: string;
    trigger: string;
    content: string;
  }
  
  export default function DynamicAccordion({ items }: { items: AccordionItem[] }) {
    return (
      <Accordion type="single" collapsible >
        {items.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger className="text-primary">{item.trigger}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }
  