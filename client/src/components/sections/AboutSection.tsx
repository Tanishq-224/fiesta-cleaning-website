import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PLACEHOLDER_ABOUT_IMAGE } from "@/data/content";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-soft-taupe/50 py-16 w768:py-24">
      <Container>
        <div className="grid items-center gap-10 w1024:grid-cols-[1.05fr_0.95fr] w1024:gap-16">
          <Reveal>
            <div data-reveal className="relative aspect-[4/5] overflow-hidden w768:aspect-[5/4] w1024:aspect-[4/5]">
              <Image
                src={PLACEHOLDER_ABOUT_IMAGE}
                alt="Placeholder photograph of a calm residential interior. Not a Fiesta Cleaning team or project photo."
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover object-center"
              />
            </div>
          </Reveal>
          <Reveal stagger={0.12}>
            <div data-reveal>
              <SectionHeading title="Your Local Cleaning Partner in San Antonio, TX" />
            </div>
            <div data-reveal className="mt-6 max-w-prose space-y-4 text-dark-espresso">
              <p>
                Keeping your home or business clean takes time, effort, and
                consistency. Between work, family, and everyday responsibilities,
                finding time for thorough cleaning isn&apos;t always easy.
              </p>
              <p>That&apos;s where Fiesta Cleaning comes in.</p>
              <p>
                We help homeowners, renters, property managers, Airbnb hosts, and
                businesses maintain clean, welcoming spaces through professional
                cleaning solutions. Whether you&apos;re preparing a property for
                new occupants, maintaining a vacation rental between guests,
                refreshing your home with a deep clean, or keeping your workplace
                presentable, we offer services designed around your cleaning
                requirements.
              </p>
              <p>
                As a cleaning company serving San Antonio and nearby communities,
                our goal is to make professional cleaning convenient and
                dependable.
              </p>
            </div>
            <div data-reveal className="mt-8">
              <CtaLink href="#quote">Learn More About Fiesta Cleaning</CtaLink>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
