import { cn } from "~/lib/utils";

export function TypographyH2({
  text,
  className,
}: {
  text: string;
  className?: React.ComponentProps<"p">["className"];
}) {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 text-(--custom-dark-color-2)",
        className
      )}
    >
      {text}
    </h2>
  );
}
