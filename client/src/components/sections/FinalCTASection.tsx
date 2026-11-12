import { Container } from "@/components/layout/Container";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FinalCTASection() {
  return (
    <section
      id="quote"
      className="scroll-mt-24 bg-near-black py-16 text-warm-ivory w768:py-24"
    >
      <Container>
        <div className="grid gap-12 w1024:grid-cols-[1fr_0.9fr] w1024:items-start">
          <Reveal stagger={0.1}>
            <div data-reveal>
              <SectionHeading
                tone="dark"
                title="Ready for a Cleaner Home or Business?"
                description="Let Fiesta Cleaning take some of the cleaning work off your hands. Whether you need regular house cleaning, a detailed deep clean, vacation rental turnover, or commercial cleaning, we're ready to discuss your requirements."
              />
            </div>
            <p data-reveal className="mt-6 max-w-prose text-soft-taupe">
              Contact Fiesta Cleaning today to request a cleaning estimate and
              find the right cleaning solution for your property in San Antonio
              and surrounding communities.
            </p>
            <p data-reveal className="mt-4 text-sm text-muted-beige">
              A public phone number has not been confirmed, so quote requests
              currently stay on this form.
            </p>
          </Reveal>
          <Reveal>
            <div
              data-reveal
              className="border border-warm-ivory/15 bg-dark-espresso p-6 text-warm-ivory w768:p-8"
            >
              <h3 className="font-sans text-xl font-bold">Request an estimate</h3>
              <div className="mt-6">
                <QuoteForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
