---
name: Cybernetic Research Interface
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#b9caca'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#849495'
  outline-variant: '#3a494a'
  surface-tint: '#00dce5'
  primary: '#e9feff'
  on-primary: '#003739'
  primary-container: '#00f5ff'
  on-primary-container: '#006c71'
  inverse-primary: '#00696e'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#faf9ff'
  on-tertiary: '#002e6a'
  tertiary-container: '#d0ddff'
  on-tertiary-container: '#005dc8'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#63f7ff'
  primary-fixed-dim: '#00dce5'
  on-primary-fixed: '#002021'
  on-primary-fixed-variant: '#004f53'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
  code:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
spacing:
  unit: 4px
  gutter: 24px
  margin: 40px
  container-max: 1440px
---

## Brand & Style

The visual identity of this design system is rooted in the concept of "Digital Discovery." It targets an audience of researchers, engineers, and academic pioneers who require an interface that feels like a high-precision instrument. The brand personality is intellectual, forward-leaning, and unapologetically technical.

The aesthetic blends **Glassmorphism** with **High-Tech Minimalism**. It avoids decorative fluff in favor of functional data visualization cues. The emotional response should be one of "controlled power"—as if the user is operating a command center for advanced computation. Key visual motifs include micro-grids, light-refracting surfaces, and "active" states that glow with synthetic energy.

## Colors

This design system utilizes a deep, nocturnal foundation to maximize the luminosity of its accent palette. The primary color is a vibrant **Electric Teal**, used for critical actions and active states. The secondary **Hyper Violet** is reserved for data-heavy visualizations and secondary highlights, while **Neon Blue** serves as a supportive accent for interactive elements.

The background is not true black, but a deeply desaturated obsidian (#020617) to allow for depth perception via shadows and blurs. Text is primarily rendered in high-contrast off-whites and cool grays to ensure legibility against the dark backdrop.

## Typography

The typographic hierarchy uses a dual-font strategy to balance technical character with readability. **Space Grotesk** is used for headlines and labels, providing a geometric, futuristic feel that references classic engineering aesthetics. For long-form content and UI labels requiring maximum clarity, **Inter** is employed for its neutral, systematic performance.

Headlines should be set with tight letter-spacing to create a "locked-in" look. Utility labels and metadata should always be set in all-caps Space Grotesk to mimic instrument readouts.

## Layout & Spacing

This design system uses a **12-column fluid grid** with a hard-coded 4px base unit. This small base unit allows for precision alignment of technical components. Gutters are generous at 24px to provide visual "breathing room" between complex data clusters.

The background layer must feature a subtle **16px or 32px square grid pattern** in a low-opacity stroke (2-4% opacity) to provide a structural skeleton for the layout. Elements should align strictly to this grid to reinforce the feel of a precision-engineered interface.

## Elevation & Depth

Depth is conveyed through **Glassmorphism** and layering rather than traditional shadows. Surfaces use a "Surface-Container" model:

1.  **Level 0 (Base):** Deep obsidian with a subtle grid.
2.  **Level 1 (Panels):** Semi-transparent fills (e.g., `rgba(30, 41, 59, 0.5)`) with a `backdrop-filter: blur(12px)`.
3.  **Level 2 (Active/Floating):** Higher transparency with a subtle "inner glow" achieved via a 1px solid border at 20% opacity of the primary color.

"Glowing borders" are used to indicate focus or active states. Instead of a drop shadow, use a `box-shadow` with a high spread and low opacity matching the primary accent color to create a neon atmospheric effect.

## Shapes

To maintain a "precision instrument" aesthetic, this design system utilizes **sharp corners (0px)** as the default for all structural elements like cards, panels, and input fields. 

Where interaction requires a slightly softer touch, a **micro-radius of 2px** may be applied to buttons or chips to prevent visual harshness on high-density displays. However, the overall silhouette of the interface must remain rectilinear and architectural.

## Components

### Buttons
Primary buttons use a solid Electric Teal fill with black text for maximum contrast. Secondary buttons use a "ghost" style: a 1px teal border with a subtle glow on hover. All buttons must have a sharp 90-degree corner.

### Cards & Panels
Panels utilize the glassmorphism effect. The top border should be slightly brighter than the others (0.5pt stroke) to simulate a light source from above. 

### Input Fields
Inputs are defined by a bottom-only border or a very faint 4-sided stroke. On focus, the border transitions to Primary Teal, and a subtle "scanline" animation or glow effect is permitted to indicate the field is active.

### Chips & Tags
Used for research categories or status. These should be small, all-caps, and use "Electric Blue" or "Hyper Violet" as backgrounds with 10-15% opacity, creating a semi-transparent tinted look.

### Data Visualization
Charts should avoid rounded line caps. Use stepped lines for graphs to emphasize discrete data points. All data points should have a small "glow" point to ensure they pop against the dark background.