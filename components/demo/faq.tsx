import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const data = [
    {
        id: "1",
        question: "What is Tailwind CSS?",
        answer: "Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override."
    },
    {
        id: "2",
        question: "What is shadcn/ui?",
        answer: "shadcn/ui is a collection of composable React components for building a consistent design system across your web project."
    },
    {
        id: "3",
        question: "What is the difference between Tailwind CSS and shadcn/ui?",
        answer: "Tailwind CSS is a utility-first CSS framework. shadcn/ui is a collection of composable React components for building a consistent design system across your web project."
    },
    {
        id: "4",
        question: "How do I get started with shadcn/ui?",
        answer: "You can install shadcn/ui using npm or yarn. It's recommended to use the npm package manager."
    }
]

export default function Faq() {
    return (
        <Accordion type="single" collapsible className="w-full">
            {data.map((item, index) => (
                <AccordionItem value={item.id} key={index} >
                    <AccordionTrigger>
                        {item.question}
                    </AccordionTrigger>
                    <AccordionContent>
                        {item.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}