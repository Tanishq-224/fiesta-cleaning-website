import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FiestaLogo } from "@/components/layout/FiestaLogo";
import { footerQuickLinks, footerServiceLinks } from "@/data/navigation";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="bg-dark-espresso py-16 text-warm-ivory w768:py-20"
    >
      <Container>
        <div className="grid gap-12 w768:grid-cols-2 w1024:grid-cols-4">
          <div className="w1024:col-span-2">
            <FiestaLogo variant="footer" />
            <p className="mt-5 max-w-md font-sans text-lg font-bold">
              Professional Cleaning Services in San Antonio, TX
            </p>
            <p className="mt-4 max-w-md text-sm text-soft-taupe">
              Fiesta Cleaning provides residential and commercial cleaning
              solutions for homes, businesses, and vacation rental properties in
              San Antonio and surrounding communities.
            </p>
            <p className="mt-6 text-sm text-soft-taupe">
              Phone, email, address, and business hours will be published once
              they are confirmed. Until then, use the quote form to share your
              request details.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-muted-beige uppercase">
              Services
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {footerServiceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-dusty-terracotta">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-muted-beige uppercase">
              Quick links
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {footerQuickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-dusty-terracotta">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-warm-ivory/15 pt-6 text-sm text-soft-taupe w768:flex-row w768:items-center w768:justify-between">
          <p>San Antonio, TX and confirmed surrounding communities.</p>
          <p>
            © {year} Fiesta Cleaning. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
