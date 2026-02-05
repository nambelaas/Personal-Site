import { TypographyLarge } from "@/components/TypographyLarge";
import { TypographyP } from "@/components/TypographyP";
import { Home } from "lucide-react";

export function Footer() {
  return (
    <>
      <div
        id="footer"
        className="pt-45 pb-15 flex flex-col items-center justify-center gap-2"
      >
        <TypographyLarge
          text="Created by Salman @ 2026"
          className="text-(--custom-dark-color-3)"
        />
        <div className="flex flex-row gap-2 items-center">
          <Home className="text-(--custom-dark-color-3)" />
          <TypographyP
            text="Brebes, Central Java, ID"
            className="text-(--custom-dark-color-3) not-first:mt-0"
          />
        </div>
      </div>
    </>
  );
}
