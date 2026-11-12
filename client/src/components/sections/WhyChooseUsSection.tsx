import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyChoosePoints } from "@/data/content";

export function WhyChooseUsSection() {
  return (
    <section
      id="why"
      className="scroll-mt-24 bg-dark-espresso py-16 text-warm-ivory w768:py-24"
    >
      <Container>
        <Reveal>
          <div data-reveal>
            <SectionHeading
              tone="dark"
              title="Why San Antonio Homeowners and Businesses Choose Fiesta Cleaning"
              description="Choosing a cleaning company is about more than getting surfaces cleaned. It's about finding a team that understands your requirements, respects your property, and makes the entire experience easier."
            />
          </div>
        </Reveal>
        <Reveal
          className="mt-12 grid gap-x-16 gap-y-10 w768:grid-cols-2"
          stagger={0.1}
        >
          {whyChoosePoints.map((point, index) => (
            <article key={point.title} data-reveal className="flex gap-5">
              <span className="font-serif text-3xl italic text-dusty-terracotta">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-sans text-xl font-bold">{point.title}</h3>
                <p className="mt-2 text-sm text-soft-taupe">{point.description}</p>
              </div>
            </article>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
