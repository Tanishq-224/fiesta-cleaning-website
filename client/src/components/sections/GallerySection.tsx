import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryCategories } from "@/data/content";

export function GallerySection() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-soft-taupe/35 py-16 w768:py-24">
      <Container>
        <Reveal>
          <div data-reveal>
            <SectionHeading
              title="See the Difference Professional Cleaning Can Make"
              description="A clean space can make a meaningful difference in how a property looks and feels. Explore examples of our cleaning work and see the attention we bring to different spaces."
            />
          </div>
        </Reveal>
        <Reveal
          className="mt-12 grid gap-px bg-muted-beige w480:grid-cols-2 w1024:grid-cols-3"
          stagger={0.08}
        >
          {galleryCategories.map((category) => (
            <article
              key={category}
              data-reveal
              className="flex min-h-40 flex-col justify-end bg-warm-ivory p-5"
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-muted-beige uppercase">
                Placeholder
              </p>
              <h3 className="mt-2 font-sans text-lg font-bold">{category}</h3>
              <p className="mt-2 text-sm text-dark-espresso">
                Approved before-and-after photographs from Fiesta Cleaning
                projects have not been supplied yet.
              </p>
            </article>
          ))}
        </Reveal>
        <Reveal className="mt-10">
          <div data-reveal>
            <CtaLink href="#quote">Explore Our Cleaning Gallery</CtaLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
