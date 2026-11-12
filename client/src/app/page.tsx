import { Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Home() {
  return (
    <main className="min-h-screen bg-warm-ivory">
      <Container className="flex min-h-screen flex-col justify-center py-16">
        <Sparkles
          aria-hidden
          className="mb-6 h-6 w-6 text-dusty-terracotta"
          strokeWidth={1.75}
        />
        <SectionHeading
          as="h1"
          eyebrow="Project foundation"
          title="Fiesta Cleaning"
          description={
            <p>
              Initial website setup is in place. Homepage sections will be
              implemented after this foundation is approved.
            </p>
          }
        />
        <p className="mt-8 font-serif text-2xl text-dark-espresso italic">
          Premium, editorial cleaning services for San Antonio.
        </p>
        <ul className="mt-10 grid max-w-xl grid-cols-2 gap-3 text-sm text-dark-espresso w480:grid-cols-3">
          <li className="border border-soft-taupe bg-warm-ivory px-3 py-2">
            Warm Ivory
          </li>
          <li className="border border-soft-taupe bg-soft-taupe px-3 py-2">
            Soft Taupe
          </li>
          <li className="border border-muted-beige bg-muted-beige px-3 py-2 text-near-black">
            Muted Beige
          </li>
          <li className="border border-dusty-terracotta bg-dusty-terracotta px-3 py-2 text-warm-ivory">
            Dusty Terracotta
          </li>
          <li className="border border-dark-espresso bg-dark-espresso px-3 py-2 text-warm-ivory">
            Dark Espresso
          </li>
          <li className="border border-near-black bg-near-black px-3 py-2 text-warm-ivory">
            Near Black
          </li>
        </ul>
      </Container>
    </main>
  );
}
