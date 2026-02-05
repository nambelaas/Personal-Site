import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const sections = [
  { id: "aboutme", label: "About" },
  { id: "work", label: "Work" },
  { id: "techstack", label: "Tech" },
  { id: "experience", label: "Experience" },
  { id: "how-i-work", label: "How I Work" },
];

export function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const scrollPosition = window.scrollY + 120;
      let current = "";

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (!el) return;

        if (
          scrollPosition >= el.offsetTop &&
          scrollPosition < el.offsetTop + el.offsetHeight
        ) {
          current = section.id;
        }
      });

      if (current) setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  const scrollTo = (id: string) => {
    setIsScrolling(true);
    setActive(id);
    setOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setTimeout(() => {
      setIsScrolling(false);
    }, 600);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white h-12 md:h-auto">
      <div className="mx-auto flex max-w-6xl justify-center px-4 py-3">
        <nav className="hidden md:flex gap-8">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`relative text-sm transition
            ${
              active === s.id
                ? "text-black font-medium"
                : "text-muted-foreground hover:text-black"
            }
          `}
            >
              {s.label}

              {active === s.id && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-black" />
              )}
            </button>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          className="absolute right-4 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white mt-6">
          <nav className="flex flex-col p-4 gap-4">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`text-left ${
                  active === s.id
                    ? "font-medium text-black"
                    : "text-muted-foreground"
                }`}
              >
                {s.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
