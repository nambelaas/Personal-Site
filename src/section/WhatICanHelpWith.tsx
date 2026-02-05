import { TypographyH2 } from "@/components/TypographyH2";
import { TypographyLarge } from "@/components/TypographyLarge";
import { TypographyP } from "@/components/TypographyP";

export function WhatICanHelpWith() {
  return (
    <>
      <div id="work" className=" py-30">
        <div className="grid grid-flow-col grid-rows-5 md:grid-rows-2 md:grid-cols-4 ">
          <div className="col-start-1 row-start-1 md:col-span-4 md:row-start-1 border border-(--custom-dark-color-3) rounded-t-2xl text-center place-content-center">
            <TypographyH2 text="What I Can Help With" />
          </div>
          <div className="col-start-1 row-start-2 border-x border-b border-(--custom-dark-color-3) py-6 px-4 md:rounded-bl-2xl">
            <TypographyLarge text="Web Application Development" />
            <TypographyP text="Building reliable and maintainable web applications with a focus on performance and scalability." />
          </div>
          <div className="col-start-1 md:col-start-2 row-start-3 md:row-start-2 border-b border-x md:border-x-0 md:border-r border-(--custom-dark-color-3) py-6 px-4">
            <TypographyLarge text="Backend & API Development" />
            <TypographyP text="Designing and developing RESTful APIs, database schemas, and backend systems that are clean, secure, and easy to extend." />
          </div>
          <div className="col-start-1 md:col-start-3 row-start-4 md:row-start-2 border-b border-x md:border-x-0 border-(--custom-dark-color-3) py-6 px-4">
            <TypographyLarge text="Frontend Development" />
            <TypographyP text="Implementing responsive and accessible interfaces using React and Tailwind CSS." />
          </div>
          <div className="col-start-1 md:col-start-4 row-start-5 md:row-start-2 border-x border-b border-(--custom-dark-color-3) py-6 px-4 rounded-b-2xl md:rounded-bl-none md:rounded-br-2xl">
            <TypographyLarge text="UI-Focused Interface Implementation" />
            <TypographyP text="Translating design concepts into functional interfaces with attention to usability, layout, and interaction details." />
          </div>
        </div>
      </div>
    </>
  );
}
