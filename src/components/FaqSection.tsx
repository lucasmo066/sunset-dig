import Accordion from "@/components/Accordion"


const faqItems = [
    {
      value: "item-1",
      trigger: "Why not just hire an in-house development team?",
      content: "Hiring a full-time development team can be costly, often exceeding $100,000 annually per developer, not including benefits or the challenge of finding available talent. Our subscription model offers flexibility to scale your web development needs without the overhead, providing access to top-tier tech and AI-assisted workflows at a fraction of the cost.",
    },
    {
      value: "item-2",
      trigger: "How long will it take to build my website?",
      content: "Your website will be live within 30 days of onboarding, with ongoing updates and improvements delivered within days of your request. Our streamlined process ensures your healthcare website is up and running quickly, with continuous support and updates to keep it fresh and relevant.",
    },
    {
      value: "item-3",
      trigger: "Is there a limit to the number of requests I can make?",
      content: "With our subscription, you can submit unlimited content and update requests. We handle these one at a time to ensure each task receives dedicated attention, guaranteeing quality and efficiency.",
    },
    {
      value: "item-4",
      trigger: "Who Are Your Investors And What Deal Sizes Are You Targeting?",
      content: "Most requests are fulfilled within a few days, depending on complexity. We prioritize efficiency and quality, ensuring your healthcare website remains dynamic and up-to-date."
    },
    {
        value: "item-5",
        trigger: "Who will be developing and designing my website?",
        content: "Our team consists of experienced developers and designers specializing in web solutions, leveraging AI tools to enhance workflows. For specific advanced requests, we collaborate with specialized partners to meet your needs."
    },
    {
        value: "item-6",
        trigger: "What technologies and platforms do you specialize in?",
        content: "We specialize in modern web technologies such as Next.js, React, and Sanity.io, integrating AI capabilities to offer a seamless, efficient web development experience tailored to the healthcare industry."
    },
    {
        value: "item-7",
        trigger: "How do I submit development or design requests?",
        content: "Requests can be submitted through our client help center in the form of a ticket, or through email which will also create a new ticket for our team. We offer flexible options to fit your workflow, including direct consultations for more complex needs."
    },
    {
        value: "item-8",
        trigger: "What if I'm not satisfied with the work done?",
        content: "Your satisfaction is our priority. We offer revisions and adjustments until you're fully satisfied with the outcome, ensuring your healthcare website meets your exact needs and expectations."
    },
    {
        value: "item-9",
        trigger: "Are there any services you don't provide?",
        content: "While we cover a wide range of web development and design services tailored to healthcare, we do not specialize in creating proprietary medical software or EHR systems. Our focus is on enhancing your online presence through superior web design and functionality."
    },
    {
        value: "item-10",
        trigger: "What if my needs are minimal to start?",
        content: "That's perfectly fine. You can start with a lighter plan and scale up as needed. Our model is designed to adapt to your project's scope, big or small."
    },
    {
        value: "item-11",
        trigger: "What if I need to cancel my subscription?",
        content: "You can cancel your subscription at any time, no questions asked. We offer a 100% money-back guarantee if you're not satisfied with our services, ensuring you have the flexibility to adjust your plan as needed."
    }
  ];
  
  export default function FaqsSection() {
    return (
      <div className=" flex flex-col px-6 py-10">
        <h1 className="text-5xl md:text-6xl text-center bg-gradient-to-br from-orange-400 to-orange-700 bg-clip-text font-semibold tracking-tight text-transparent mb-4">Frequently Asked Questions</h1>
        <p className="text-center font-extralight mb-20">
            Get Clarifications Here
        </p>
        <div className="mt-8 p-2 items-center">
        <Accordion items={faqItems} />
        </div>
      </div>
    );
  }