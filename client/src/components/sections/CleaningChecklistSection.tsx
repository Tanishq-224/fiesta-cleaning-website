import { Container } from "@/components/layout/Container";
import { Accordion } from "@/components/ui/Accordion";
import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cleaningChecklist } from "@/data/checklist";

export function CleaningChecklistSection() {
  return (
    <section id="checklist" className="scroll-mt-24 bg-warm-ivory py-16 w768:py-24">
      <Container>
        <div className="grid gap-10 w1024:grid-cols-[0.9fr_1.1fr] w1024:gap-16">
          <Reveal stagger={0.1}>
            <div data-reveal>
              <SectionHeading
                title="A Closer Look at the Areas We Clean"
                description="A clean property requires attention to different rooms, surfaces, and frequently used areas. Depending on your selected service and cleaning package, our cleaning checklist may include:"
              />
            </div>
            <p data-reveal className="mt-6 max-w-prose text-sm text-dark-espresso">
              Exact tasks vary by service. Deep cleaning, move-out, commercial,
              and vacation-rental cleaning may have different inclusions,
              add-ons, or exclusions.
            </p>
            <div data-reveal className="mt-8">
              <CtaLink href="#quote">View Our Cleaning Checklists</CtaLink>
            </div>
          </Reveal>
          <Reveal>
            <div data-reveal>
              <Accordion
                items={cleaningChecklist.map((item) => ({
                  title: item.room,
                  content: item.tasks,
                }))}
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
