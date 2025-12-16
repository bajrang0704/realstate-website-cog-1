# Deccan Veda Realty - Codebase Guide

This document provides a comprehensive overview of the **Deccan Veda Realty** website codebase. It is designed to help developers (and AI assistants) understand the project structure, architectural decisions, and component hierarchy quickly.

## 🛠️ Technology Stack

-   **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **Package Manager:** npm

---

## 📂 Project Structure

```text
e:\website\
├── src\
│   ├── app\                 # Next.js App Router (pages & layouts)
│   │   ├── layout.tsx       # Root layout (fonts, metadata, global styles)
│   │   ├── page.tsx         # Home page
│   │   └── projects\        # Project routes
│   │       └── heritage-county\
│   │           └── page.tsx # Specific project page
│   ├── components\          # Reusable UI components
│   │   ├── home\            # Components specific to the Home page
│   │   ├── layout\          # Global layout components (Navbar, Footer)
│   │   └── project\         # Components for Project details pages
│   ├── lib\                 # Utility functions
│   └── assets\              # (Optional) Raw assets before moving to public
├── public\                  # Static assets (images, logos, favicon)
├── postcss.config.mjs       # PostCSS config
├── tailwind.config.ts       # Tailwind CSS config
├── tsconfig.json            # TypeScript config
└── next.config.ts           # Next.js config
```

---

## 🏗️ Architecture & Core Concepts

### 1. App Router (`src/app`)
The project uses the Next.js App Router.
-   **`layout.tsx`**: Defines the global shell. It imports `globals.css` (Tailwind directives), configures fonts (`Inter` and `Outfit`), and sets global metadata.
-   **Pages**: Each directory inside `app` represents a route.
    -   `src/app/page.tsx` → `/` (Home)
    -   `src/app/projects/heritage-county/page.tsx` → `/projects/heritage-county`

### 2. Component Organization (`src/components`)
Components are grouped by their domain context rather than atomic type.

#### **Layout Components (`src/components/layout`)**
-   **`MainNavbar.tsx`**: The global top navigation.
    -   **Features**: Transparent-to-white scroll effect, mobile hamburger menu, "Book Site Visit" CTA.
    -   **State**: Tracks scroll position to toggle styles.
-   **`MainFooter.tsx`**: The global footer.
    -   **Content**: Company branding, quick links, contact info, social links, copyright.

#### **Home Components (`src/components/home`)**
Used primarily on the landing page (`src/app/page.tsx`).
-   **`MainHero.tsx`**: Full-screen landing visual with headline.
-   **`CorporateAbout.tsx`**: "Who We Are" section with stats (e.g., "500+ Satisfied Customers").
-   **`WhyChooseUs.tsx`**: Cards highlighting USPs.
-   **`FeaturedProjects.tsx`**: Carousel or grid of available projects.
-   **`Testimonials.tsx`**: Customer review slider/grid.
-   **`LeadCapture.tsx`**: Design for capturing user interest (form/CTA).

#### **Project Components (`src/components/project`)**
Used for individual project pages (e.g., Heritage County).
-   **`ProjectLayout.tsx`**: A specialized wrapper component.
    -   **Critical Logic**: Implements a **Secondary Sticky Navbar** that appears only after scrolling past the hero.
    -   **Mobile Gap Fix**: Uses `top-[80px] lg:top-[96px]` to align perfectly under the Main Navbar on different devices.
-   **`ProjectHero.tsx`**: Distinct from MainHero; shows specific project stats (Acres, Units).
-   **`ProjectHighlights.tsx`**: Grid of key features.
-   **`ProjectAmenities.tsx`**: List/Grid of amenities with icons.
-   **`ProjectGallery.tsx`**: Image grid with filters (All, Images, Videos).
-   **`PriceCalculator.tsx`**: Interactive EMI/Price estimator component.

### 3. Utilities (`src/lib`)
-   **`utils.ts`**: Contains the `cn()` helper function.
    -   Combines `clsx` (conditional classes) and `tailwind-merge` (deduplicating conflicting TW classes).
    -   *Usage*: `className={cn("base-class", condition && "active-class")}`

---

## 🎨 Styling & Configuration

-   **Tailwind CSS**: The utility-first framework handles all styling.
-   **Fonts**: Configured in `layout.tsx` via `next/font/google`.
    -   `--font-inter`: Body text.
    -   `--font-outfit`: Headings/Display text.
-   **Responsive Design**: Mobile-first approach.
    -   Default classes = Mobile.
    -   `md:` = Tablet.
    -   `lg:` = Desktop.

## 📝 Key Maintenance Notes

1.  **Adding a New Project**:
    -   Create `src/app/projects/[project-slug]/page.tsx`.
    -   Import `ProjectLayout` and wrap the content.
    -   Reuse `Project*` components, passing specific data (title, images, stats) as props.

2.  **Modifying Global Nav**:
    -   Edit `src/components/layout/MainNavbar.tsx`.
    -   Ensure `scrolled` state logic is preserved if changing background behaviors.

3.  **Updating Branding**:
    -   Check `CorporateAbout.tsx` and `MainFooter.tsx` for hardcoded company name/stats.
    -   Ensure "Realty" spelling is consistent (not "Reality").

4.  **Mobile Testing**:
    -   Always verify the "Navbar Gap" on mobile when touching `ProjectLayout` or `MainNavbar`. The sticky nav offset must match the visible height of the main nav.

---
*Generated by Antigravity on 2025-12-16*
