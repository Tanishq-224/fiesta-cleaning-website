# FIESTA CLEANING — PROJECT MASTER BRIEF
**Document type:** Design, development, and quality-assurance source of truth  
**Project:** Fiesta Cleaning — Website Redesign  
**Primary market:** San Antonio, Texas, USA  
**Stack:** Next.js · TypeScript · Tailwind CSS · GSAP · Motion · Lenis  
**Status:** Design direction and core requirements approved

---

## 1. How to Use This Document

This file is the primary implementation brief for the Antigravity coding agent.

### Agent instructions
1. Read this entire document before changing or creating project files.
2. Inspect the existing repository, installed dependencies, routes, assets, and current implementation before making assumptions.
3. Treat the requirements in this document as the source of truth.
4. Do not reintroduce the discarded blue-gradient SaaS/Event-Tech visual direction or its color palette.
5. Do not invent business facts, reviews, ratings, service-area coverage, guarantees, phone numbers, email addresses, prices, or operational policies.
6. Preserve the meaning of the supplied Fiesta Cleaning content. You may improve presentation and break long copy into readable UI, but do not silently change factual claims.
7. Work in small, verifiable phases. Update the checklist in this document as work is completed.
8. Do not mark a task complete unless it has been implemented and checked.
9. If a required business asset or fact is unavailable, use a clearly identified placeholder and record it as a dependency.
10. Before finishing a phase, run the relevant checks and report results, failures, and remaining work.

### Priority order
When requirements appear to conflict, follow this order:
1. Correct business content and functionality.
2. Responsive usability and accessibility.
3. Approved visual identity and design direction.
4. Performance and maintainability.
5. Decorative effects.

---

## 2. Project Goal

Redesign the Fiesta Cleaning website into a premium, editorial-style cleaning-service website for customers in San Antonio, Texas and confirmed nearby communities.

The site should feel:
- Premium and professional
- Warm, welcoming, and trustworthy
- Editorial and image-led
- Minimal without feeling empty
- Visually distinctive rather than like a generic cleaning-company template
- Easy to navigate and conversion-focused

The redesign should take visual inspiration from the supplied luxury furniture/editorial website reference:
- Cinematic, immersive photography
- Strong image composition
- Large, expressive but controlled typography
- Spacious editorial layouts
- Alternating image-led and text-led sections
- Restrained details and carefully selected visual accents
- Dark photographic hero treatment
- Distinct section compositions instead of repeating the same card grid

**Important:** Use the reference as art-direction inspiration, not as a layout to copy literally. Adapt it to a local residential and commercial cleaning business.

---

## 3. Approved Brand System

### 3.1 Final six-color palette

These six colors are approved. Do not replace them with another palette or introduce a blue-gradient brand system.

| Color name | HEX | Intended use |
|---|---|---|
| Warm Ivory | `#FAF3ED` | Main page background and light sections |
| Soft Taupe | `#D5CCC4` | Alternate section backgrounds, subtle surfaces |
| Muted Beige | `#A89583` | Secondary accents, borders, restrained decorative details |
| Dusty Terracotta | `#B77C64` | Small highlights, selected accents, quote CTA emphasis |
| Dark Espresso | `#3B322B` | Dark sections, footer, selected dark buttons |
| Near Black | `#11100E` | Main headings and primary text |

Suggested initial usage balance (adjust slightly when needed for contrast and visual balance):
- Warm Ivory: approximately 50%
- Soft Taupe: approximately 20%
- Near Black: approximately 15%
- Dark Espresso: approximately 10%
- Muted Beige and Dusty Terracotta: approximately 5% combined as restrained accents

Do not force the percentage if a section needs a different balance. Maintain the overall warm editorial identity.

### 3.2 Color application rules
- Use Warm Ivory as the dominant light surface.
- Use Soft Taupe to create section rhythm; do not alternate backgrounds mechanically.
- Use Near Black for readable text and headings.
- Use Dark Espresso for strong contrast, footer areas, and selected CTA surfaces.
- Use Dusty Terracotta sparingly. It is an accent, not the dominant brand color.
- Use Muted Beige for quiet details, separators, and secondary surfaces.
- Check text contrast on every background. Never use low-contrast beige text for essential content.
- Do not add gradients as a default visual treatment. If a subtle photo overlay is needed, use a dark espresso/near-black gradient for legibility.

### 3.3 Logo
- Use the supplied official Fiesta Cleaning logo asset wherever available.
- Do not redraw, distort, crop, or arbitrarily recolor the official logo.
- Preserve its aspect ratio.
- If a monochrome variant is needed for a dark/light surface, request or create an approved variant only if the supplied asset and brand permission support it. Otherwise use the original logo with a suitable background.
- Do not use an invented text logo as a permanent substitute.

---

## 4. Typography System

### Approved font pairing
Use Google Fonts or an equivalent optimized font-loading approach.

| Role | Typeface | Weight |
|---|---|---|
| Main headings | Manrope | 700 / 800 |
| Selective italic highlights | Cormorant Garamond | 600 Italic |
| Body copy | Manrope | 400 / 500 |
| Navigation | Manrope | 600 |
| Buttons | Manrope | 600 / 700 |
| Card headings | Manrope | 700 |
| Small labels / eyebrows | Manrope | 600 |

### Typography direction
- Use Manrope for strong, clean, modern headline structure.
- Use Cormorant Garamond Italic selectively for a few emphasized words or short editorial phrases.
- Do not render every heading in serif.
- Do not use script fonts for website content. The script style belongs to the brand logo only.
- Keep paragraphs readable and avoid very long line lengths.
- Use fluid typography carefully. Avoid extreme `clamp()` values and oversized headings that break at tablet/mobile widths.
- Maintain consistent line-height, letter-spacing, and hierarchy.
- Use real text, not text baked into images.

### Initial sizing guidance
Treat these as starting points, then validate at the required viewport widths:
- Hero heading: approximately 48–68px desktop, scaling down responsively.
- Section headings: approximately 36–48px desktop.
- Card headings: approximately 19–24px.
- Body copy: approximately 16–18px.
- Supporting labels: approximately 12–14px.
- Mobile headings must wrap naturally without clipping or awkward single-word lines.

---

## 5. Layout and Visual Design Rules

### 5.1 Container lock + fluid design
Use a consistent container system throughout the site.
- Prefer patterns such as `width: min(90%, 1280px)` or a reusable equivalent.
- Use a shared container utility/component rather than arbitrary widths in each section.
- Use fluid grid and flex layouts.
- Avoid fixed-width page layouts.
- Avoid random margins, absolute-positioning hacks, and unexplained spacing values.
- Use a consistent spacing scale and section rhythm.
- Keep content within the viewport and prevent horizontal overflow.
- Limit paragraph widths for comfortable reading.
- Use `minmax()`, responsive grid columns, and `fit-content` where appropriate.
- Use fixed dimensions only where justified (icons, controls, image aspect ratios, etc.).

### 5.2 Section variety
Do not turn every section into a grid of cards.
Use a deliberate mix of:
- Cinematic full-bleed image sections
- Editorial text/image split layouts
- Oversized statement sections
- Minimal trust/benefit highlights
- Image-led service grids where grouping is useful
- Process/timeline layouts
- Gallery layouts
- Testimonial layouts only when genuine review data is supplied
- Accordion for FAQs
- High-contrast final CTA and structured footer

Avoid repeating the same two-column or card layout in consecutive sections.

### 5.3 Surface and component styling
- Prefer clean surfaces, restrained borders, and subtle shadows.
- Avoid excessive rounded cards; choose radii intentionally and consistently.
- Avoid glassmorphism everywhere. Reserve it for the hero content surface only if it improves legibility and suits the image.
- Avoid glossy effects, excessive gradients, noisy backgrounds, and decorative clutter.
- Use professional icons (Lucide or an already-installed consistent icon library). Do not use emojis as interface icons.
- Icons should be consistent in stroke weight and size.
- All interactive elements need visible hover, focus, active, and disabled states.

---

## 6. Hero Section — Specific Approved Direction

The hero is a major visual priority.

### Composition
- Use a high-quality, wide interior/property photograph as a full-width hero background.
- The image should feel like a premium, genuinely clean residential interior: warm daylight, elegant but believable styling, uncluttered surfaces, natural materials.
- Place the hero content over the image, not in a separate side-by-side image column.
- Apply a dark overlay/gradient (Near Black or Dark Espresso with controlled opacity) to protect text contrast.
- Use a subtle translucent/blurred content surface only where useful. If using `backdrop-filter`, keep it restrained and preserve text sharpness.
- Do not blur the entire background image so heavily that the property is no longer visible.
- Hero content should include the approved heading, concise supporting copy, primary quote CTA, secondary phone CTA, and the four supporting trust points.
- Ensure the main message and primary CTA are visible without scrolling on common desktop viewports.
- On mobile, preserve the hierarchy and CTA visibility; adjust hero height and crop rather than shrinking everything excessively.

### Hero content from the supplied brief
**H1:** Professional Cleaning Services in San Antonio, TX

**Supporting copy:**  
Enjoy a cleaner, fresher, and more comfortable space with Fiesta Cleaning. We provide professional residential and commercial cleaning services throughout San Antonio and surrounding communities. From routine house cleaning and detailed deep cleaning to move-in/move-out cleaning, Airbnb turnovers, and commercial cleaning, we're here to make maintaining your property easier.

Whether you need a one-time cleaning or ongoing cleaning support, our team is ready to help you find the right cleaning solution for your space.

**Primary CTA:** Get a Free Cleaning Quote  
Use “free” only if the business confirms that quotes are genuinely free.

**Secondary CTA:** Call Us Today — [Phone Number]  
Phone number is a dependency; do not invent one.

**Supporting points:**
- Customized Cleaning Solutions
- Flexible Scheduling Options
- Residential & Commercial Cleaning
- Serving San Antonio and Nearby Communities

---

## 7. Responsive Requirements

The website must be deliberately designed and tested at all four target widths:

| Target width | Layout intent |
|---|---|
| 1024px | Small desktop / large tablet; preserve hierarchy, adapt grids and navigation |
| 768px | Tablet; simplify multi-column layouts and ensure touch-friendly controls |
| 600px | Large mobile; stack layouts intentionally, adjust image crops and typography |
| 480px | Small mobile; compact navigation, readable copy, no overflow, usable forms |

Also verify intermediate widths and common device widths, not only the four exact targets.

### Responsive behavior
- Mobile must not look like a broken or simply stacked desktop page.
- Recompose layouts where needed; change order only when it improves reading flow.
- Use responsive image sources/crops and deliberate `object-position`.
- Keep CTA buttons comfortably tappable.
- Make navigation usable on touch devices (menu button, accessible mobile menu).
- Service grids should reduce columns logically.
- Timeline/process sections should become a clear vertical flow on mobile.
- Gallery and before/after interactions must remain usable on touch screens.
- FAQ accordions must support keyboard and touch interaction.
- Quote forms must fit narrow screens, with labels and validation messages readable.
- Avoid horizontal scrolling except for an intentional, clearly signposted component.
- Check sticky/fixed elements do not cover content or CTAs.
- Respect safe-area insets where relevant.

### Responsive acceptance checks
At each target width:
- No horizontal page overflow.
- No clipped text or controls.
- No overlapping navigation, headings, images, or CTAs.
- Images retain useful focal points.
- Buttons and form controls are usable.
- Section spacing is intentional.
- No animation causes layout shifts or traps the user.

---

## 8. Motion and Animation System

Use:
- **GSAP + ScrollTrigger:** hero entrance, controlled image reveals, editorial section transitions, and selected scroll-based effects.
- **Motion:** button/card micro-interactions, navigation state transitions, accordion/UI transitions, and small component-level effects.
- **Lenis:** smooth scrolling where appropriate.

### Animation rules
- Keep motion restrained, smooth, and premium.
- Use subtle staggered fade/translate reveals.
- Prefer opacity and transform animations; avoid animating layout-heavy properties.
- Do not animate every element.
- Avoid flashy transitions, excessive parallax, scroll hijacking, and long entrance delays.
- Do not make content inaccessible until an animation finishes.
- Ensure content remains visible if JavaScript or animation initialization fails.
- Respect `prefers-reduced-motion`.
- Avoid conflicting animation ownership: do not let GSAP and Motion animate the same property on the same element.
- Integrate Lenis and ScrollTrigger correctly; clean up listeners and animation contexts on unmount.
- Prevent pinned sections and horizontal effects from breaking mobile scroll.
- Do not add horizontal scrolling unless it has a clear design purpose and works on touch screens.

### Motion QA
- Test animation behavior at desktop, tablet, and mobile sizes.
- Test reduced-motion preference.
- Check for flicker, layout shift, scroll jumps, stuck pins, and console warnings.
- Confirm animations do not delay access to important content or CTAs.

---

## 9. Technology and Code Architecture

### Required stack
- Next.js (App Router unless the existing repository establishes a justified alternative)
- TypeScript (strict mode)
- Tailwind CSS
- GSAP + ScrollTrigger
- Motion (`motion` / Motion for React, depending on installed package)
- Lenis
- Lucide React or the project's existing consistent icon library

### Implementation rules
- Inspect existing package versions and project conventions before installing or upgrading packages.
- Do not replace the project's framework or major dependencies without a clear reason and approval.
- Use semantic HTML and accessible components.
- Build reusable components for repeated patterns.
- Keep components focused and avoid giant monolithic page files.
- Prefer Tailwind utilities for standard styling. Use CSS Modules or scoped CSS only when a complex animation or component genuinely benefits from it; do not create parallel styling systems unnecessarily.
- Avoid unnecessary inline styles. Dynamic values required by animation or image positioning may use controlled inline styles when justified.
- Keep TypeScript types explicit and avoid `any`.
- Use Next.js image optimization (`next/image`) for local/remote images with correct dimensions, sizes, and responsive behavior.
- Use `next/font` where practical for optimized font loading.
- Lazy-load below-the-fold media where appropriate.
- Use server components by default; add client components only for interactivity, animation, or browser-dependent behavior.
- Avoid hydration mismatches.
- Ensure links, buttons, forms, and menus perform real actions; do not leave decorative/inert controls.
- Add concise, useful English comments only where logic is non-obvious.
- Keep secrets and private credentials out of source control.

### Suggested structure
Adapt to the current repository rather than forcing this exact tree:

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    layout/
      SiteHeader.tsx
      SiteFooter.tsx
      Container.tsx
      MobileNavigation.tsx
    sections/
      HeroSection.tsx
      TrustSection.tsx
      AboutSection.tsx
      ServicesSection.tsx
      WhyChooseUsSection.tsx
      CleaningChecklistSection.tsx
      ProcessSection.tsx
      ServiceAreasSection.tsx
      GallerySection.tsx
      ReviewsSection.tsx
      FAQSection.tsx
      FinalCTASection.tsx
    ui/
      Button.tsx
      SectionHeading.tsx
      ServiceCard.tsx
      Accordion.tsx
  data/
    services.ts
    faqs.ts
    cleaning-checklist.ts
  lib/
    utils.ts
  styles/
    ...
public/
  images/
  brand/
```

Do not create duplicate components or files if equivalent components already exist.

---

## 10. Image and Asset Direction

Images are a core part of this design, not decoration.

### Preferred image subjects
- Premium but believable lived-in homes
- Bright kitchens and bathrooms
- Clean living rooms and bedrooms
- Professional office interiors
- Move-in/move-out properties
- Vacation-rental interiors
- Post-construction spaces, only when relevant
- Real Fiesta Cleaning team members and completed projects, if supplied and approved

### Image treatment
- Use coherent warm-neutral color grading that complements Warm Ivory, Taupe, Beige, Espresso, and Terracotta.
- Prefer natural daylight and authentic textures.
- Use high-resolution images with clear focal points and adequate negative space for text overlays.
- Maintain consistent aspect ratios within repeated card groups.
- Use `object-fit: cover` for photographic hero and card images when filling a defined frame; choose `object-position` to preserve the subject.
- Use `object-fit: contain` for logos, icons, and isolated graphics that must remain fully visible.
- Do not blindly apply `contain` to every photograph; that can create empty bars and weaken the composition.
- Avoid repeated use of the same image across multiple sections unless there is a deliberate art-direction reason.
- Optimize file size and responsive delivery.
- Add meaningful alt text for informative images; use empty alt text for purely decorative images.
- Do not use generated or stock imagery as proof of actual Fiesta Cleaning work.
- Do not label stock/generated images as before-and-after results, customer projects, staff, or real testimonials.
- Obtain permission before publishing identifiable customer/property photographs.

### Asset dependencies
Record the following as pending until supplied or confirmed:
- Official logo files (preferably SVG/transparent PNG and light/dark variants if available)
- Genuine team/owner photographs
- Genuine project photographs
- Approved before-and-after pairs
- Approved customer review content and source links
- Any licensed stock image source or approved image library

If genuine assets are not yet available, use carefully selected licensed/placeholder imagery for the design build and label it internally as placeholder content.

---

## 11. Homepage Information Architecture — 13 Required Sections

The supplied document is titled **“Fiesta Cleaning | Homepage Content & Design Brief”** and contains the following section requirements. Implement all 13 sections. The section order below follows the brief, with Trust Indicators and Company Introduction kept distinct.

### Section 1 — Hero
**H1:** Professional Cleaning Services in San Antonio, TX

Use the complete hero copy in Section 6 of this master brief. Include:
- Primary CTA: Get a Free Cleaning Quote
- Secondary CTA: Call Us Today — [Phone Number]
- Four supporting points: customized solutions, flexible scheduling, residential/commercial, San Antonio service area

Design: full-width cinematic interior photograph, dark overlay, content layered over image, restrained blur treatment where useful.

### Section 2 — Trust Indicators
**H2:** A Cleaning Company That Puts Your Space First

Intro:
“At Fiesta Cleaning, we understand that inviting a cleaning company into your home or business requires confidence. That's why we focus on clear communication, attention to detail, and cleaning solutions designed around your property's needs.”

Four points:
- **Personalized Cleaning Plans:** Cleaning solutions tailored to your property, priorities, and schedule.
- **Attention to Detail:** A thoughtful approach to cleaning the areas that matter most.
- **Convenient Scheduling:** One-time and recurring cleaning options based on availability.
- **Residential & Commercial Expertise:** Cleaning solutions for homes, offices, vacation rentals, and other properties.

Design: compact icon-based highlights or an editorial feature layout. Only use statements that accurately describe the business.

### Section 3 — Company Introduction
**H2:** Your Local Cleaning Partner in San Antonio, TX

Copy:
“Keeping your home or business clean takes time, effort, and consistency. Between work, family, and everyday responsibilities, finding time for thorough cleaning isn't always easy.

That's where Fiesta Cleaning comes in.

We help homeowners, renters, property managers, Airbnb hosts, and businesses maintain clean, welcoming spaces through professional cleaning solutions. Whether you're preparing a property for new occupants, maintaining a vacation rental between guests, refreshing your home with a deep clean, or keeping your workplace presentable, we offer services designed around your cleaning requirements.

As a cleaning company serving San Antonio and nearby communities, our goal is to make professional cleaning convenient and dependable.”

CTA: Learn More About Fiesta Cleaning

Design: editorial text-and-image composition. Prefer real owner/team or genuine project photography when available.

### Section 4 — Cleaning Services
**H2:** Complete Cleaning Services for Homes and Businesses in San Antonio

Intro:
“Every property has different cleaning requirements. That's why Fiesta Cleaning offers a range of cleaning services to help you maintain your space, prepare for a move, or get a property ready for its next occupants.”

Implement all six service entries:
1. **Recurring House Cleaning:** Keep your home fresh and comfortable without managing every cleaning task yourself. Ongoing cleaning can cover kitchens, bathrooms, bedrooms, living spaces, and other commonly used areas. CTA: Explore House Cleaning Services.
2. **Deep Cleaning Services:** When routine cleaning isn't enough, a more detailed approach can help refresh your home. Deep cleaning focuses on agreed areas that may receive less attention during everyday cleaning. CTA: Explore Deep Cleaning Services.
3. **Move-In / Move-Out Cleaning:** Help prepare homes and apartments for new occupants, property handovers, or your next move. CTA: Explore Move-In/Move-Out Cleaning.
4. **Commercial Cleaning Services:** Cleaning solutions for businesses looking to maintain offices and commercial spaces. CTA: Explore Commercial Cleaning.
5. **Airbnb & Vacation Rental Cleaning:** Help hosts and property managers prepare properties between guest stays. CTA: Explore Airbnb Cleaning Services.
6. **Post-Construction Cleaning:** Help prepare newly built or renovated spaces after construction or renovation work. CTA: Explore Post-Construction Cleaning.

Design: image-led service compositions/cards are appropriate here. Each service should link to its own dedicated page only if that page exists; otherwise use a clearly intentional contact/quote destination and record service-page routes as future work.

### Section 5 — Why Choose Fiesta Cleaning?
**H2:** Why San Antonio Homeowners and Businesses Choose Fiesta Cleaning

Intro:
“Choosing a cleaning company is about more than getting surfaces cleaned. It's about finding a team that understands your requirements, respects your property, and makes the entire experience easier.”

Six points:
- **Cleaning Solutions That Fit Your Needs:** We work to understand your priorities and recommend an appropriate cleaning service.
- **A Focus on the Details:** We focus on completing the agreed cleaning tasks carefully.
- **Convenient Cleaning Options:** One-time or recurring arrangements based on your requirements and availability.
- **Services for Different Property Types:** Cleaning solutions for homes, apartments, offices, and vacation rentals.
- **Clear Communication:** We explain what's included, how scheduling works, and what to expect.
- **Serving San Antonio and Nearby Communities:** We help customers across our confirmed service area.

Design: six icon/text blocks or a two-column editorial layout. Replace generic claims with specific proof points only when the business supplies them.

### Section 6 — Cleaning Checklist
**H2:** A Closer Look at the Areas We Clean

Intro:
“A clean property requires attention to different rooms, surfaces, and frequently used areas. Depending on your selected service and cleaning package, our cleaning checklist may include:”

Room groups:
- **Kitchen:** countertops, sinks and faucets, appliance exteriors, accessible cabinet exteriors, backsplashes, floors, and trash.
- **Bathrooms:** toilets, sinks and faucets, showers and bathtubs, mirrors, fixtures, floors, and trash.
- **Bedrooms:** accessible furniture and surfaces, mirrors, bed making when included, floors, and trash.
- **Living rooms and common areas:** accessible furniture, tables, mirrors and glass, accessible switches and handles, carpets, rugs, and hard floors.

Clarification:
“Exact tasks vary by service. Deep cleaning, move-out, commercial, and vacation-rental cleaning may have different inclusions, add-ons, or exclusions.”

CTA: View Our Cleaning Checklists

Design: room-based columns or accessible accordion panels. Clearly distinguish standard tasks from add-ons. Do not imply every task is included in every package.

### Section 7 — Cleaning Process
**H2:** Getting Your Property Clean Is Simple

Intro:
“We make it easy to get started with professional cleaning services.”

Four steps:
1. **Tell Us What You Need:** Contact Fiesta Cleaning and share your property details, preferred service, and requirements.
2. **Receive Your Cleaning Estimate:** We'll review your requirements and provide an estimate based on property size, cleaning needs, and selected service.
3. **Schedule Your Appointment:** Choose an available appointment and confirm the cleaning arrangements.
4. **Enjoy a Cleaner Space:** Our team completes the agreed cleaning tasks.

CTA: Request Your Cleaning Quote

Design: horizontal four-step process on desktop, clear vertical process on mobile. Ensure it reflects actual business operations.

### Section 8 — Local Service Area
**H2:** Proudly Serving San Antonio, TX and Surrounding Communities

Copy:
“Fiesta Cleaning provides residential and commercial cleaning services in San Antonio, Texas, and nearby communities within our service area.

Whether you live in San Antonio or manage a property in a surrounding community, we're here to help you find the right cleaning solution.”

Primary service location: San Antonio, Texas.

Candidate nearby communities listed in the brief:
- Helotes
- Leon Valley
- Alamo Heights
- Shavano Park
- Castle Hills
- Universal City
- Live Oak
- Converse
- Schertz
- Cibolo
- Boerne
- New Braunfels

**Critical publishing rule:** Publish only locations Fiesta Cleaning genuinely serves and can accommodate. These are candidate communities in the brief, not confirmed coverage.

CTA: Check Our Service Availability

Design: accurate map or clear service-area list. Link only to completed, useful location pages. Do not imply every candidate city is served.

### Section 9 — Before & After Gallery
**H2:** See the Difference Professional Cleaning Can Make

Copy:
“A clean space can make a meaningful difference in how a property looks and feels. Explore examples of our cleaning work and see the attention we bring to different spaces.”

Gallery categories:
- Kitchen Cleaning
- Bathroom Deep Cleaning
- Residential Cleaning
- Move-In/Move-Out Cleaning
- Vacation Rental Cleaning
- Commercial Cleaning

Requirements:
- Use genuine before-and-after photographs from Fiesta Cleaning projects.
- Add captions describing service/location only when accurate and approved by the customer.
- Use consistent crops and an optional before/after slider.
- Optimize images and obtain permission before publishing.

**Never fabricate before-and-after results.** If genuine pairs are unavailable, show a clearly labelled gallery placeholder or omit the proof claim until assets are supplied.

CTA: Explore Our Cleaning Gallery

### Section 10 — Customer Reviews
**H2:** What Our Customers Say About Fiesta Cleaning

Copy:
“We believe customer experiences are an important part of building a reliable cleaning business. Read feedback from people who have trusted Fiesta Cleaning with their homes and properties.”

Requirements:
- Display genuine customer reviews only.
- Use names only where permission is available.
- Include dates, Google review source attribution, and verified ratings only when supplied/verified.
- CTA: Read More Customer Reviews
- Optional CTA: Share Your Experience

**Do not fabricate testimonials, names, ratings, review counts, or endorsements.** If no verified reviews are supplied, create a neutral empty state or leave the review module unpublished.

### Section 11 — FAQs
**H2:** Frequently Asked Questions About Our Cleaning Services

Implement an accessible accordion with these questions and source copy:

1. **What cleaning services does Fiesta Cleaning offer in San Antonio?**  
   Fiesta Cleaning offers residential and commercial cleaning solutions, including recurring house cleaning, deep cleaning, move-in/move-out cleaning, commercial cleaning, Airbnb and vacation rental cleaning, and post-construction cleaning.

2. **How much do professional cleaning services cost in San Antonio?**  
   Cleaning costs depend on factors such as property size, cleaning condition, selected service, frequency, and additional requirements. Contact Fiesta Cleaning to discuss your property and receive a customized estimate.

3. **Do you offer one-time and recurring house cleaning?**  
   We offer cleaning options based on customer requirements and service availability. Contact us to discuss one-time cleaning and recurring scheduling options.

4. **What's the difference between regular house cleaning and deep cleaning?**  
   Regular house cleaning focuses on maintaining everyday cleanliness in commonly used areas. Deep cleaning involves more detailed attention to areas that may not be addressed during routine cleaning. Exact tasks depend on the selected package.

5. **Do you provide move-in and move-out cleaning?**  
   Yes. We offer move-in and move-out cleaning solutions to help prepare properties for new occupants, property handovers, or a fresh start in your new home.

6. **Do you offer Airbnb and vacation rental cleaning?**  
   Yes. Our vacation rental cleaning service is designed to help property owners and hosts prepare properties between guest stays. Contact us to discuss turnover requirements and scheduling availability.

7. **Do I need to provide cleaning supplies and equipment?**  
   Please contact our team to confirm which cleaning products and equipment are included for your selected service and whether special product preferences can be accommodated.

8. **Which areas around San Antonio do you serve?**  
   We serve San Antonio and selected nearby communities. Contact our team with your city or ZIP code so we can confirm whether your property is within our service area.

9. **How can I book a cleaning service with Fiesta Cleaning?**  
   Call us or complete our online quote request form. Share your property details, preferred service, and scheduling requirements, and our team will help with the next steps.

Requirements:
- Answers must be available to crawlers and assistive technology.
- Support keyboard navigation and visible focus.
- Use semantic buttons and appropriate expanded-state attributes.
- Do not invent policies to fill gaps.

### Section 12 — Final CTA
**H2:** Ready for a Cleaner Home or Business?

Copy:
“Let Fiesta Cleaning take some of the cleaning work off your hands. Whether you need regular house cleaning, a detailed deep clean, vacation rental turnover, or commercial cleaning, we're ready to discuss your requirements.

Contact Fiesta Cleaning today to request a cleaning estimate and find the right cleaning solution for your property in San Antonio and surrounding communities.”

CTAs:
- Primary: Get Your Free Cleaning Quote
- Secondary: Call Us Today — [Phone Number]

Design:
- High-contrast section using approved palette.
- Include a concise quote form.
- Use “free” only if quotes are genuinely free.
- Do not invent contact information or form submission success.

### Section 13 — Footer
**Brand line:** Fiesta Cleaning – Professional Cleaning Services in San Antonio, TX

Description:
“Fiesta Cleaning provides residential and commercial cleaning solutions for homes, businesses, and vacation rental properties in San Antonio and surrounding communities.”

Footer content:
- Contact: [Business Phone Number] | [Business Email] | [Public Business Address, if applicable] | [Confirmed Business Hours]
- Services: Recurring House Cleaning; Deep Cleaning; Move-In/Move-Out Cleaning; Commercial Cleaning; Airbnb & Vacation Rental Cleaning; Post-Construction Cleaning.
- Quick links: Home; About Us; Our Work; Customer Reviews; Service Areas; FAQs; Blog; Contact Us; Get a Free Quote.
- Service areas: San Antonio, TX and confirmed surrounding communities.
- Legal: Privacy Policy; Terms & Conditions.
- Copyright: © [Year] Fiesta Cleaning. All Rights Reserved.

Do not publish a private address if the company is a service-area business. Do not invent phone, email, hours, or legal-page content.

---

## 12. Functional Requirements and Content Dependencies

### Required interactions
- Header navigation links scroll or route to the correct destinations.
- Mobile navigation opens, closes, and supports keyboard use.
- Quote CTAs lead to the quote form or a real quote route.
- Phone CTAs use a verified `tel:` number.
- Service links route to real service pages or a clearly defined quote/contact fallback.
- FAQ accordion opens and closes accessibly.
- Gallery controls work on mouse, keyboard, and touch.
- Before/after slider, if implemented, has accessible controls and a usable mobile interaction.
- Quote form validates required fields and provides clear error/success states.
- Do not display a success state unless submission actually succeeds.
- External review links, if used, point to the correct verified review destination.

### Business information to obtain
Track these as dependencies:
- [ ] Confirmed business phone number
- [ ] Confirmed business email
- [ ] Confirmed business hours
- [ ] Confirm whether quotes are free
- [ ] Confirmed service-area communities / ZIP codes
- [ ] Confirmed quote request workflow and recipient
- [ ] Confirmed cleaning supply/equipment policy
- [ ] Confirmed recurring-service availability and scheduling process
- [ ] Genuine customer reviews and permission/source details
- [ ] Genuine before-and-after images and publication permissions
- [ ] Genuine team/owner photographs
- [ ] Official logo asset(s)
- [ ] Privacy Policy and Terms & Conditions content/URLs
- [ ] Confirmed social profile URLs, if displayed

---

## 13. SEO, Accessibility, and Performance

### SEO
- Use meaningful page title and meta description for San Antonio cleaning services.
- Use one clear H1 and logical heading hierarchy.
- Use semantic section landmarks.
- Add descriptive alt text to informative images.
- Use descriptive link text; avoid generic repeated “Learn More” without context.
- Add Open Graph metadata and a suitable social sharing image.
- Add LocalBusiness/appropriate cleaning-service structured data only with verified business facts.
- Do not add fabricated address, rating, review, hours, or service-area schema.
- Ensure FAQ content is present in the rendered page.
- Ensure canonical URL and sitemap/robots configuration are correct for the production domain.

### Accessibility
- Semantic HTML.
- Keyboard-accessible navigation and interactions.
- Visible focus states.
- Correct labels and instructions for every form field.
- Accessible validation and error announcements.
- Sufficient color contrast.
- Meaningful image alt text; decorative images should not create noise for screen readers.
- Reduced-motion support.
- Do not rely on color alone to communicate status.
- Use accessible accordion and gallery controls.

### Performance
- Use optimized responsive images.
- Avoid oversized hero images and unnecessary video backgrounds.
- Lazy-load below-the-fold images.
- Prioritize the hero/LCP image correctly.
- Avoid layout shifts by defining image dimensions/aspect ratios.
- Keep client-side JavaScript limited to interactive components.
- Avoid unnecessary dependencies and duplicated animation libraries.
- Check bundle size and browser console.
- Target strong Core Web Vitals; measure rather than claim performance.

---

## 14. Testing and Definition of Done

A phase is not complete merely because the page looks correct in one screenshot.

### Required checks
- TypeScript check passes.
- ESLint/lint passes (if configured).
- Production build passes.
- No browser console errors.
- No hydration warnings.
- No broken links or missing images.
- All interactive controls work.
- Forms show correct validation and submission behavior.
- Responsive checks pass at 1024px, 768px, 600px, and 480px.
- Test reduced-motion mode.
- Check keyboard-only navigation.
- Check image loading and layout shift.
- Check all sections against the source content brief.
- Verify no fabricated business claims or placeholder data accidentally appears as real data.

### Suggested test approach
Inspect the repository's existing test setup first. Add practical tests for:
- Navigation and mobile menu
- FAQ accordion
- Quote form validation and success/error states
- Key reusable UI components
- Critical responsive interactions where automated testing is practical

Do not add a large test framework without considering the existing project setup.

---

## 15. Phase-by-Phase Development Plan

Work in this order. Do not skip ahead while foundational work is broken.

### Phase 0 — Repository Audit and Setup
- Inspect repository structure, package manager, scripts, dependencies, routes, and current assets.
- Confirm Next.js version and App Router setup.
- Confirm TypeScript strictness and Tailwind version/configuration.
- Identify existing components worth reusing.
- Identify missing assets and business information.
- Create or update this master brief and checklist in the repository.
- Confirm development and production build commands.

**Acceptance:** A concise audit report exists; no unnecessary dependency or framework changes have been made.

### Phase 1 — Design Foundation
- Configure Manrope and Cormorant Garamond.
- Add the six approved color tokens.
- Establish container, spacing, typography, button, icon, and image conventions.
- Build shared Container, Button, SectionHeading, and site layout components.
- Establish responsive navigation behavior.

**Acceptance:** Design tokens and shared components work at all four target widths.

### Phase 2 — Header and Cinematic Hero
- Build desktop and mobile header.
- Implement full-bleed hero background photography.
- Add dark gradient overlay and restrained content blur treatment.
- Add hero heading, copy, quote CTA, phone CTA, and four supporting points.
- Tune image focal point and mobile crop.
- Add restrained GSAP/Motion entrance effects with reduced-motion fallback.

**Acceptance:** Hero is readable, responsive, performant, and functional at all target widths.

### Phase 3 — Trust, About, Services, and Why Choose Us
- Implement Trust Indicators.
- Implement Company Introduction.
- Implement all six Cleaning Services.
- Implement Why Choose Fiesta Cleaning.
- Use varied editorial layouts; avoid repetitive card grids.
- Add relevant imagery and working links/fallbacks.

**Acceptance:** All copy and service categories from the brief are represented accurately.

### Phase 4 — Checklist, Process, and Service Areas
- Implement room-based cleaning checklist.
- Implement four-step cleaning process.
- Implement service-area list/map using confirmed locations only.
- Make process and checklist interactions accessible.

**Acceptance:** No unsupported task inclusions or unconfirmed service locations are presented as facts.

### Phase 5 — Gallery and Reviews
- Implement gallery categories and image layout.
- Implement before/after interaction only when genuine pairs exist.
- Implement reviews only when verified reviews are supplied.
- Add empty/placeholder states when real content is unavailable.
- Verify permissions and source attribution.

**Acceptance:** No generated/stock imagery is represented as actual work; no fabricated reviews or ratings.

### Phase 6 — FAQ, Final CTA, Quote Form, and Footer
- Implement all nine FAQs.
- Implement final CTA and quote form.
- Implement footer navigation, services, and contact details.
- Connect form to the approved submission workflow when supplied.
- Add legal links only when valid destinations/content exist.

**Acceptance:** All interactions work; missing business data is clearly tracked and not invented.

### Phase 7 — Responsive and Motion Refinement
- Test exact target widths: 1024px, 768px, 600px, 480px.
- Test intermediate widths and mobile navigation.
- Refine image crops, type scaling, section spacing, and layout order.
- Verify GSAP/ScrollTrigger/Lenis integration and cleanup.
- Verify reduced-motion behavior.
- Remove unnecessary animation and layout shifts.

**Acceptance:** No overflow, clipping, broken pinning, scroll jumps, or inaccessible animated content.

### Phase 8 — SEO, Accessibility, Performance, and Final QA
- Complete metadata and structured data using verified facts.
- Run accessibility and keyboard checks.
- Optimize image delivery and client bundles.
- Run lint, typecheck, tests, and production build.
- Review every section against the original content brief.
- Produce a final QA report with remaining dependencies and known limitations.

**Acceptance:** Production build and required checks pass; unresolved issues are documented.

---

## 16. Master Progress Checklist

Update this checklist continuously. Use `[x]` only after verification. Use `[ ]` for incomplete work and `[!]` for blocked/dependent work.

### Project setup
- [x] Phase 0 repository audit completed
- [x] Existing routes/components/assets reviewed
- [x] Dependencies and package versions verified
- [x] Build/lint/typecheck commands verified
- [x] Master brief added to repository

### Design system
- [x] Manrope configured
- [x] Cormorant Garamond configured
- [x] Six approved color tokens configured
- [x] Shared container system implemented
- [x] Typography scale implemented
- [x] Spacing system implemented
- [x] Buttons and interactive states implemented
- [x] Icon system standardized
- [ ] Image conventions documented/implemented

### Header and hero
- [ ] Desktop header
- [ ] Responsive mobile navigation
- [ ] Full-width hero background image
- [ ] Dark gradient overlay
- [ ] Restrained blur/glass treatment
- [ ] Hero heading and supporting copy
- [ ] Primary quote CTA
- [ ] Secondary phone CTA
- [ ] Four supporting trust points
- [ ] Hero image focal point tuned for mobile
- [ ] Hero animations and reduced-motion fallback

### Homepage sections
- [ ] Section 2 — Trust Indicators
- [ ] Section 3 — Company Introduction
- [ ] Section 4 — Cleaning Services (all six)
- [ ] Section 5 — Why Choose Fiesta Cleaning
- [ ] Section 6 — Cleaning Checklist
- [ ] Section 7 — Cleaning Process
- [ ] Section 8 — Service Areas
- [ ] Section 9 — Before & After Gallery
- [ ] Section 10 — Customer Reviews
- [ ] Section 11 — FAQs (all nine)
- [ ] Section 12 — Final CTA and Quote Form
- [ ] Section 13 — Footer

### Responsive QA
- [ ] 1024px verified
- [ ] 768px verified
- [ ] 600px verified
- [ ] 480px verified
- [ ] Intermediate widths verified
- [ ] No horizontal overflow
- [ ] No clipped/overlapping content
- [ ] Touch targets and forms usable
- [ ] Image crops/focal points verified
- [ ] Mobile navigation verified

### Animation QA
- [x] GSAP/ScrollTrigger setup
- [ ] Motion interactions
- [x] Lenis setup and ScrollTrigger integration
- [x] Animation cleanup on unmount
- [ ] No conflicting animation ownership
- [ ] No scroll jumps or stuck pins
- [x] Reduced-motion support
- [ ] Mobile animation behavior verified

### Content and assets
- [ ] Official logo supplied and integrated
- [ ] Hero image selected/licensed
- [ ] Service images selected/licensed
- [ ] Genuine team/owner photos supplied
- [ ] Genuine before/after pairs supplied
- [ ] Verified reviews supplied
- [ ] Service-area communities confirmed
- [ ] Phone/email/hours confirmed
- [ ] Free-quote claim confirmed
- [ ] Quote submission workflow confirmed
- [ ] Cleaning supplies policy confirmed
- [ ] Legal links/content confirmed
- [ ] No invented facts or placeholder content presented as real

### Quality and launch readiness
- [ ] Semantic HTML reviewed
- [ ] Keyboard accessibility checked
- [ ] Focus states checked
- [ ] Form labels/errors checked
- [ ] Color contrast checked
- [ ] Alt text reviewed
- [ ] Metadata and Open Graph configured
- [ ] Structured data uses verified facts only
- [ ] Images optimized
- [ ] Core Web Vitals measured
- [x] TypeScript check passes
- [x] Lint passes
- [ ] Tests pass
- [x] Production build passes
- [ ] Browser console clean
- [ ] All links and CTAs verified
- [ ] Final content audit completed
- [ ] Final QA report produced

---

## 17. Agent Reporting Format

At the end of each phase, report:

1. **Completed:** Specific files/components/features implemented.
2. **Verified:** Commands run and manual viewport/interaction checks performed.
3. **Checklist:** Exact checklist items changed to complete.
4. **Blocked:** Missing assets, business facts, API details, or decisions.
5. **Remaining:** Next phase tasks and any known defects.

Do not report “done” when only the visual implementation is complete. Distinguish implemented, tested, and production-ready.

---

## 18. Non-Negotiable Rules

- Do not use the discarded blue-gradient SaaS/Event-Tech theme.
- Do not change the approved six-color palette without explicit approval.
- Do not change the approved font pairing without explicit approval.
- Do not turn the whole site into repetitive cards.
- Do not use excessive animations or scroll hijacking.
- Do not sacrifice mobile usability for desktop visuals.
- Do not fabricate reviews, ratings, project photos, service locations, contact details, or business policies.
- Do not treat stock/generated images as real Fiesta Cleaning work.
- Do not leave dead buttons, fake links, or nonfunctional forms.
- Do not mark unchecked work as complete.
- Do not make broad unrelated refactors while implementing a section.
- Preserve existing working functionality unless a change is required and verified.

**Final objective:** Deliver a distinctive, premium, editorial-style Fiesta Cleaning website that is responsive, accessible, performant, content-accurate, and maintainable — not merely a visually attractive mockup.
