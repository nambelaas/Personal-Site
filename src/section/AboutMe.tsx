import { TypographyH2 } from "@/components/TypographyH2";
import { TypographyP } from "@/components/TypographyP";

export function AboutMe() {
  return (
    <>
      <div
        id="aboutme"
        className="px-12 py-12 md:py-30 bg-white relative rounded-2xl border border-gray-200 scroll-mt-24"
      >
        <div className="absolute bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] z-0 bg-size-[16px_16px] w-full h-full inset-0 mask-radial-at-center mask-radial-from-20% mask-radial-to-100%"></div>
        <div className="grid grid-flow-col grid-rows-2 md:grid-rows-1 md:grid-cols-3 z-20 relative">
          <div className="col-start-1 row-start-1 md:row-start-1 content-center">
            <TypographyH2 text="About Me" />
          </div>
          <div className="col-start-1 md:col-start-2 row-start-2 md:row-start-1 md:col-span-2">
            <TypographyP text="I enjoy working at the intersection of design and engineering. Designing intuitive interfaces, writing clean code, and turning ideas into usable digital products." />
            <TypographyP text="My professional background is in software engineering, with over 2 years of experience building and maintaining web systems. Alongside that, I actively explore UI/UX design to create interfaces that are not only functional, but also thoughtful and user-focused." />
          </div>
        </div>
      </div>
    </>
  );
}
