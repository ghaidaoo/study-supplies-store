---
name: StudySpace
colors:
  surface: '#fcf9f2'
  surface-dim: '#dcdad3'
  surface-bright: '#fcf9f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ec'
  surface-container: '#f1eee7'
  surface-container-high: '#ebe8e1'
  surface-container-highest: '#e5e2db'
  on-surface: '#1c1c18'
  on-surface-variant: '#424842'
  inverse-surface: '#31312c'
  inverse-on-surface: '#f3f0e9'
  outline: '#737971'
  outline-variant: '#c2c8c0'
  surface-tint: '#49654d'
  primary: '#49654d'
  on-primary: '#ffffff'
  primary-container: '#b8d8ba'
  on-primary-container: '#435f47'
  inverse-primary: '#afcfb1'
  secondary: '#615e57'
  on-secondary: '#ffffff'
  secondary-container: '#e7e2d9'
  on-secondary-container: '#67645d'
  tertiary: '#5f5e5e'
  on-tertiary: '#ffffff'
  tertiary-container: '#d1cfcf'
  on-tertiary-container: '#595858'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#caebcc'
  primary-fixed-dim: '#afcfb1'
  on-primary-fixed: '#05210e'
  on-primary-fixed-variant: '#314d36'
  secondary-fixed: '#e7e2d9'
  secondary-fixed-dim: '#cbc6bd'
  on-secondary-fixed: '#1d1b16'
  on-secondary-fixed-variant: '#494640'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474747'
  background: '#fcf9f2'
  on-background: '#1c1c18'
  surface-variant: '#e5e2db'
typography:
  display:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  section-gap: 80px
---

## Brand & Style
The design system focuses on creating a "Calm Commerce" experience—a serene, focused environment for students and professionals to curate their physical workspace. The personality is organized, breathable, and supportive, moving away from the frantic urgency of traditional e-commerce.

The visual style is **Minimalist with a Tactile Softness**. It utilizes generous whitespace (macropadding) to reduce cognitive load, allowing high-quality product photography to serve as the primary visual driver. The interface feels light and airy, employing soft-touch UI elements that mirror the physical comfort of a well-designed study environment.

## Colors
The palette is rooted in organic, soothing tones. 
- **Primary (#B8D8BA):** A soft pastel green used for key brand moments and active states. It symbolizes growth and mental clarity.
- **Secondary/Surface (#FFF9F0):** A warm cream used as the primary background color to reduce eye strain compared to pure white.
- **Text/Neutral (#333333):** A clean charcoal for high legibility and professional grounding.
- **Surface Muted (#F4F1EA):** A slightly deeper cream for secondary sections, input fields, and subtle containers.

Avoid using harsh blacks or vibrantly saturated "sale" reds. For alerts, use muted variants of functional colors that maintain the pastel harmony.

## Typography
The design system utilizes **Inter** exclusively to maintain a highly systematic, utilitarian, yet modern feel. 

- **Headlines:** Use tighter letter-spacing and semi-bold weights to create clear visual anchors for product names and section titles.
- **Body:** Prioritize line height (1.6) to ensure long product descriptions are readable and inviting.
- **Labels:** Use Medium and Semi-bold weights for metadata (e.g., "In Stock", "Dimensions") to distinguish them from body copy without increasing size.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid** model. Content is contained within a 1280px max-width wrapper on desktop, centered with wide margins to emphasize the minimalist aesthetic.

- **Grid:** A 12-column grid on desktop, 6-column on tablet, and 2-column on mobile.
- **Rhythm:** Use an 8px base unit. Product cards should have generous padding (24px to 32px) to ensure images never feel cramped.
- **Verticality:** Use large section gaps (80px+) to separate different product categories or brand stories, reinforcing the "breathable" narrative.

## Elevation & Depth
The design system rejects heavy shadows in favor of **Outlined Depth** and subtle tonal shifts.

1.  **Level 0 (Base):** Background color (#FFF9F0).
2.  **Level 1 (Cards/Containers):** A thin 1px border (#333333 at 10% opacity) with no shadow.
3.  **Level 2 (Interaction/Hover):** A very soft, diffused shadow (Y: 4, Blur: 20, #333333 at 5% opacity) to lift the element slightly.
4.  **Level 3 (Modals/Overlays):** A more defined but still soft shadow and a 40% opacity charcoal backdrop blur to maintain focus on the task.

This approach creates a flat, "paper-like" stack that feels organized and lightweight.

## Shapes
The shape language is defined by **Soft Geometricism**. 
- **Small Elements (Buttons, Inputs):** 8px (0.5rem) corner radius.
- **Medium Elements (Product Cards, Modals):** 16px (1rem) corner radius.
- **Large Elements (Hero Banners, Image Containers):** 24px (1.5rem) corner radius.

Buttons and chips never use full pills; the distinct rounded corner preserves the "modern stationery" feel of the brand.

## Components
- **Buttons:** Primary buttons are solid Charcoal (#333333) with White text for maximum contrast. Secondary buttons use the Primary Green (#B8D8BA) with Charcoal text. Ghost buttons use a 1px Charcoal outline at 20% opacity.
- **Product Cards:** Must feature a 1:1 or 4:5 aspect ratio image container. Use a subtle #F4F1EA background for the image area to differentiate it from the white card body.
- **Input Fields:** Use the #F4F1EA surface color with an 8px radius. On focus, transition the border to the primary pastel green.
- **Chips/Filters:** Rectangular with 8px radius. Unselected states should be outlined; selected states should be solid pastel green.
- **Lists:** Clean, horizontal dividers (1px, 10% opacity) with generous vertical padding (16px) to maintain the airy feel.
- **Visual Callouts:** Use the "Primary Green" for banners or badges that indicate "New Arrival" or "Eco-Friendly," using the Label-Sm typography style.