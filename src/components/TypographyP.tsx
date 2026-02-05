import { cn } from "~/lib/utils";
export function TypographyP({
  text,
  className,
}: {
  text: string;
  className?: React.ComponentProps<"p">["className"];
}) {
  return (
    <p
      className={cn(
        "leading-7 not-first:mt-6 text-(--custom-dark-color-2)",
        className
      )}
    >
      {text}
    </p>
  );
}
