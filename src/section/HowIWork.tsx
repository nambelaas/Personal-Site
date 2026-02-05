import { TypographyH2 } from "@/components/TypographyH2";
import { TypographyP } from "@/components/TypographyP";
import { ClipboardList, FileCheck, Pyramid, SendToBack } from "lucide-react";

export function HowIWork() {
  return (
    <>
      <div id="how-i-work" className="py-30">
        <div className="grid grid-flow-col grid-rows-5 md:grid-rows-2 md:grid-cols-4 ">
          <div className="col-start-1 row-start-1 md:col-span-4 md:row-start-1 border border-(--custom-dark-color-4) rounded-t-2xl text-center place-content-center">
            <TypographyH2 text="How I Work" className="text-(--custom-dark-color-4)"/>
          </div>
          <div className="col-start-1 row-start-2 border-x border-b border-(--custom-dark-color-4) py-8 px-4 md:rounded-bl-2xl">
            <FileCheck className="size-10 p-0 text-(--custom-dark-color-4)" />
            <TypographyP text="Start by understanding the problem and its context" className="text-(--custom-dark-color-4)" />
          </div>
          <div className="col-start-1 md:col-start-2 row-start-3 md:row-start-2 border-b border-x md:border-x-0 md:border-r border-(--custom-dark-color-4) py-8 px-4">
            <ClipboardList className="size-10 p-0 text-(--custom-dark-color-4)" />
            <TypographyP text="Break down requirements into manageable parts" className="text-(--custom-dark-color-4)" />
          </div>
          <div className="col-start-1 md:col-start-3 row-start-4 md:row-start-2 border-b border-x md:border-x-0 border-(--custom-dark-color-4) py-8 px-4">
            <Pyramid className="size-10 p-0 text-(--custom-dark-color-4)" />
            <TypographyP text="Build with maintainability and scalability in mind" className="text-(--custom-dark-color-4)" />
          </div>
          <div className="col-start-1 md:col-start-4 row-start-5 md:row-start-2 border-x border-b border-(--custom-dark-color-4) py-8 px-4 rounded-b-2xl md:rounded-bl-none md:rounded-br-2xl">
            <SendToBack className="size-10 p-0 text-(--custom-dark-color-4)" />
            <TypographyP text="Iterate based on feedback and real usage" className="text-(--custom-dark-color-4)" />
          </div>
        </div>
      </div>
    </>
  );
}
