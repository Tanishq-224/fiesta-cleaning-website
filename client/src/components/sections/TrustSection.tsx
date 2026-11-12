import { CalendarClock, Home, Sparkles, UserRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { trustPoints } from "@/data/content";

const icons: LucideIcon[] = [UserRound, Sparkles, CalendarClock, Home];

export function TrustSection() {
  return (
    <section id="trust" className="scroll-mt-24 bg-warm-ivory py-16 w768:py-24">
      <Container>
        <Reveal>
          <div data-reveal>
            <SectionHeading
              title="A Cleaning Company That Puts Your Space First"
              description="At Fiesta Cleaning, we understand that inviting a cleaning company into your home or business requires confidence. That's why we focus on clear communication, attention to detail, and cleaning solutions designed around your property's needs."
            />
          </div>
        </Reveal>
        <Reveal
          className="mt-12 grid gap-8 w768:grid-cols-2 w1024:grid-cols-4"
          stagger={0.12}
        >
          {trustPoints.map((point, index) => {
            const Icon = icons[index];
            return (
              <article key={point.title} data-reveal>
                <Icon
                  aria-hidden
                  className="h-6 w-6 text-dusty-terracotta"
                  strokeWidth={1.75}
                />
                <h3 className="mt-4 font-sans text-xl font-bold">{point.title}</h3>
                <p className="mt-2 text-sm text-dark-espresso">{point.description}</p>
              </article>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
