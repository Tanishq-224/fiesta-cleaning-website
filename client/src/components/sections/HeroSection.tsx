import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { heroSupportPoints, HERO_HOME_IMAGE } from "@/data/content";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden text-warm-ivory"
    >
      <Image
        src={HERO_HOME_IMAGE}
        alt="Bright residential living room with professional cleaning in progress."
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_42%]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(105deg,rgba(17,16,14,0.88)_0%,rgba(17,16,14,0.62)_38%,rgba(17,16,14,0.22)_68%,rgba(17,16,14,0.12)_100%)]"
      />

      <Container className="relative z-10 flex min-h-[100svh] flex-col pb-8 pt-[clamp(6.5rem,17vh,9.25rem)] w768:pb-10 w768:pt-[clamp(7.25rem,15vh,10rem)]">
        <div className="w-full max-w-[34rem] w1024:max-w-[38rem]">
          <Reveal stagger={0.14} delay={0.08}>
            <h1
              data-reveal
              className="font-sans text-[clamp(2.1rem,4.8vw,4.25rem)] leading-[1.06] font-extrabold tracking-[-0.02em]"
            >
              Professional Cleaning Services in{" "}
              <span className="font-serif font-semibold italic">
                San Antonio, TX
              </span>
            </h1>
            <p
              data-reveal
              className="mt-5 max-w-md text-[0.98rem] leading-relaxed text-soft-taupe w768:text-base"
            >
              Residential and commercial cleaning with the calm, cared-for finish
              your home or business deserves—tailored to your space and schedule.
            </p>
            <div data-reveal className="mt-8">
              <Link
                href="#quote"
                className="inline-flex h-11 items-center gap-2.5 rounded-full border border-warm-ivory/35 bg-warm-ivory/10 py-1 pr-1 pl-5 font-sans text-[13px] font-semibold text-warm-ivory backdrop-blur-md transition-colors hover:bg-warm-ivory/18 w768:h-12 w768:pl-6 w768:text-sm"
              >
                Get a Cleaning Quote
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-warm-ivory text-near-black w768:h-9 w768:w-9">
                  <ArrowUpRight aria-hidden className="h-3.5 w-3.5" strokeWidth={2} />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal
          className="mt-auto hidden w-full border-t border-warm-ivory/15 pt-5 w600:block w768:pt-6"
          stagger={0.08}
        >
          <div className="flex flex-row flex-wrap gap-x-10 gap-y-2">
            {heroSupportPoints.map((point) => (
              <p
                key={point}
                data-reveal
                className="font-sans text-[11px] font-medium tracking-[0.06em] text-soft-taupe/95 uppercase w768:text-xs"
              >
                {point}
              </p>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
