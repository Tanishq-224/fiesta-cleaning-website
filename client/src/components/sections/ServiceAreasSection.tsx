import { MapPin } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServiceAreasSection() {
  return (
    <section id="areas" className="scroll-mt-24 bg-warm-ivory py-16 w768:py-24">
      <Container>
        <Reveal
          className="grid items-center gap-10 w1024:grid-cols-[1.2fr_0.8fr]"
          stagger={0.12}
        >
          <div data-reveal>
            <SectionHeading title="Proudly Serving San Antonio, TX and Surrounding Communities" />
            <div className="mt-6 max-w-prose space-y-4 text-dark-espresso">
              <p>
                Fiesta Cleaning provides residential and commercial cleaning
                services in San Antonio, Texas, and nearby communities within
                our service area.
              </p>
              <p>
                Whether you live in San Antonio or manage a property in a
                surrounding community, we&apos;re here to help you find the
                right cleaning solution.
              </p>
              <p className="text-sm">
                Nearby communities are confirmed only after the business
                verifies coverage. Share your city or ZIP code in the quote
                form so we can check availability.
              </p>
            </div>
            <div className="mt-8">
              <CtaLink href="#quote">Check Our Service Availability</CtaLink>
            </div>
          </div>
          <aside
            data-reveal
            className="border border-soft-taupe bg-soft-taupe/40 p-8"
          >
            <MapPin
              aria-hidden
              className="h-6 w-6 text-dusty-terracotta"
              strokeWidth={1.75}
            />
            <p className="mt-4 text-xs font-semibold tracking-[0.16em] text-muted-beige uppercase">
              Confirmed primary location
            </p>
            <p className="mt-2 font-sans text-2xl font-extrabold">
              San Antonio, Texas
            </p>
            <p className="mt-3 text-sm text-dark-espresso">
              Surrounding communities will be listed here once they are
              confirmed.
            </p>
          </aside>
        </Reveal>
      </Container>
    </section>
  );
}
