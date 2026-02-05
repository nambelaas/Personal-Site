import { cn } from "~/lib/utils";

export function TypographySmall({
  text,
  className,
}: {
  text: string;
  className?: React.ComponentProps<"p">["className"];
}) {
  return (
    <small className={cn("text-sm leading-none font-medium", className)}>
      {text}
    </small>
  );
}
