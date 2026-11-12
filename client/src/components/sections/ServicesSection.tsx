import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export function ServicesSection() {
  const [featured, ...rest] = services;

  return (
    <section id="services" className="scroll-mt-24 bg-warm-ivory py-16 w768:py-24">
      <Container>
        <Reveal>
          <div data-reveal>
            <SectionHeading
              title="Complete Cleaning Services for Homes and Businesses in San Antonio"
              description="Every property has different cleaning requirements. That's why Fiesta Cleaning offers a range of cleaning services to help you maintain your space, prepare for a move, or get a property ready for its next occupants."
            />
          </div>
        </Reveal>
        <Reveal className="mt-12" stagger={0.08}>
          <article
            data-reveal
            className="border border-soft-taupe bg-soft-taupe/40 p-6 w768:p-10"
          >
            <p className="text-xs font-semibold tracking-[0.18em] text-muted-beige uppercase">
              Featured service
            </p>
            <h3 className="mt-3 font-sans text-2xl font-bold w768:text-3xl">
              {featured.title}
            </h3>
            <p className="mt-4 max-w-3xl text-dark-espresso">
              {featured.description}
            </p>
            <a
              href="#quote"
              className="mt-6 inline-flex min-h-11 items-center gap-1 font-semibold text-dusty-terracotta hover:text-dark-espresso"
            >
              {featured.cta}
              <ArrowUpRight aria-hidden className="h-4 w-4" strokeWidth={1.75} />
            </a>
          </article>
        </Reveal>
        <Reveal
          className="mt-4 divide-y divide-soft-taupe border-y border-soft-taupe"
          stagger={0.08}
        >
          {rest.map((service) => (
            <article
              key={service.title}
              data-reveal
              className="grid gap-3 py-6 w768:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)_auto] w768:items-baseline w768:gap-8"
            >
              <h3 className="font-sans text-xl font-bold">{service.title}</h3>
              <p className="text-sm text-dark-espresso w768:text-base">
                {service.description}
              </p>
              <a
                href="#quote"
                className="inline-flex min-h-11 items-center font-semibold text-dusty-terracotta hover:text-dark-espresso"
              >
                {service.cta}
              </a>
            </article>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
