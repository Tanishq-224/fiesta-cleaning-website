# Fiesta Cleaning Website

Premium, editorial-style cleaning service website for Fiesta Cleaning, serving San Antonio, Texas and confirmed surrounding communities.

## Overview

This project is built with Next.js (App Router), TypeScript, Tailwind CSS, GSAP, Motion, and Lenis.

Design direction and implementation requirements are maintained locally as a project brief and are not published in this repository.

## Project Structure

```text
Fiesta Project/
├── README.md
├── .gitignore
└── client/                    # Next.js frontend application
```

## Branch Strategy

- `main`: Protected production baseline.
- `development`: Primary integration and active development branch. Feature and phase branches branch from and merge into `development`.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS
- **Animations:** GSAP & ScrollTrigger, Motion, Lenis Smooth Scroll
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js >= 18 (recommended: Node 20+)
- npm >= 9

### Development Setup

Navigate into the client directory:

```bash
cd client
npm install
npm run dev
```

The application will be accessible at `http://localhost:3000`.

### Scripts (Client)

- `npm run dev`: Starts the Next.js development server
- `npm run build`: Builds the production bundle
- `npm run start`: Starts the Next.js production server
- `npm run lint`: Runs ESLint checks
- `npm run typecheck`: Runs TypeScript compiler check (`tsc --noEmit`)
