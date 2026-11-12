import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ReviewsSection() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-warm-ivory py-16 w768:py-24">
      <Container>
        <Reveal stagger={0.12} className="max-w-3xl">
          <div data-reveal>
            <SectionHeading
              title="What Our Customers Say About Fiesta Cleaning"
              description="We believe customer experiences are an important part of building a reliable cleaning business. Read feedback from people who have trusted Fiesta Cleaning with their homes and properties."
            />
          </div>
          <div
            data-reveal
            className="mt-10 border border-dashed border-muted-beige px-6 py-10"
          >
            <p className="font-serif text-2xl italic text-dark-espresso">
              Reviews will appear here when verified customer feedback is
              supplied.
            </p>
            <p className="mt-4 text-sm text-dark-espresso">
              No names, ratings, or testimonials are shown yet because they have
              not been confirmed.
            </p>
          </div>
          <div data-reveal className="mt-8">
            <CtaLink href="#quote">Read More Customer Reviews</CtaLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
