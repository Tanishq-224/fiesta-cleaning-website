import { Container } from "@/components/layout/Container";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faqs";

export function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-24 bg-soft-taupe/30 py-16 w768:py-24">
      <Container>
        <Reveal>
          <div data-reveal>
            <SectionHeading title="Frequently Asked Questions About Our Cleaning Services" />
          </div>
        </Reveal>
        <Reveal className="mt-10">
          <div data-reveal>
            <Accordion
              items={faqs.map((item) => ({
                title: item.question,
                content: item.answer,
              }))}
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
