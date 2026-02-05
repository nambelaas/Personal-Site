import { cn } from "~/lib/utils";

export function TypographyLarge({
  text,
  className,
}: {
  text: string;
  className?: React.ComponentProps<"p">["className"];
}) {
  return (
    <div
      className={cn(
        "text-lg font-semibold text-(--custom-dark-color-2)",
        className
      )}
    >
      {text}
    </div>
  );
}
