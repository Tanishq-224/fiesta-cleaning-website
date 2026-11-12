import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/content";

export function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-24 bg-soft-taupe/40 py-16 w768:py-24">
      <Container>
        <Reveal>
          <div data-reveal>
            <SectionHeading
              title="Getting Your Property Clean Is Simple"
              description="We make it easy to get started with professional cleaning services."
            />
          </div>
        </Reveal>
        <Reveal
          className="mt-12 grid gap-8 w768:grid-cols-2 w1024:grid-cols-4"
          stagger={0.12}
        >
          {processSteps.map((step, index) => (
            <article key={step.title} data-reveal className="relative">
              <span className="font-serif text-5xl italic text-muted-beige">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-sans text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-sm text-dark-espresso">{step.description}</p>
            </article>
          ))}
        </Reveal>
        <Reveal className="mt-12">
          <div data-reveal>
            <CtaLink href="#quote">Request Your Cleaning Quote</CtaLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
