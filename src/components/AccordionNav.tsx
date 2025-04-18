import { useEffect } from "react";

interface AccordionNavProps {
  children: React.ReactNode;
}

export default function AccordionNav({ children }: AccordionNavProps) {
  useEffect(() => {
    const initialize = () => {
      const container = document.getElementById("accordion-container");
      if (!container) return;

      const triggers = container.querySelectorAll(".accordion-trigger");

      triggers.forEach((trigger) => {
        if (!(trigger instanceof HTMLElement)) return;

        const handleClick = (event: MouseEvent) => {
          const trigger = event.currentTarget as HTMLElement;
          const content = trigger.nextElementSibling;
          if (!(content instanceof HTMLElement)) return;

          const isOpen = trigger.getAttribute("data-state") === "open";

          // Close all accordions
          triggers.forEach((otherTrigger) => {
            if (!(otherTrigger instanceof HTMLElement)) return;
            if (otherTrigger !== trigger) {
              const otherContent = otherTrigger.nextElementSibling;
              if (!(otherContent instanceof HTMLElement)) return;

              otherTrigger.setAttribute("data-state", "closed");
              otherContent.setAttribute("data-state", "closed");
              otherContent.style.setProperty("--content-height", "0px");
            }
          });

          // Toggle current accordion
          if (isOpen) {
            trigger.setAttribute("data-state", "closed");
            content.setAttribute("data-state", "closed");
            content.style.setProperty("--content-height", "0px");
          } else {
            trigger.setAttribute("data-state", "open");
            content.setAttribute("data-state", "open");
            content.style.setProperty(
              "--content-height",
              `${content.scrollHeight}px`,
            );
          }
        };

        // Remove existing event listener to prevent duplicates
        trigger.removeEventListener("click", handleClick as EventListener);
        // Add new event listener
        trigger.addEventListener("click", handleClick as EventListener);
      });
    };

    // Initialize on mount
    initialize();

    // Initialize on page transitions
    document.addEventListener("astro:page-load", initialize);

    return () => {
      document.removeEventListener("astro:page-load", initialize);
      const container = document.getElementById("accordion-container");
      if (!container) return;

      const triggers = container.querySelectorAll(".accordion-trigger");
      triggers.forEach((trigger) => {
        if (!(trigger instanceof HTMLElement)) return;
        trigger.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div className="flex flex-col gap-1 pt-8" id="accordion-container">
      {children}
    </div>
  );
}
