# Bean Kitchen Design Guidelines - Luxury Kitchen Renovation Clone

## Design Approach: Premium Interior Design Reference

This is a faithful clone of the Bean Kitchen WordPress theme - a luxury kitchen design and renovation showcase. The design draws inspiration from high-end interior design websites like those in the hospitality and home renovation space, emphasizing visual storytelling through rich photography and elegant typography.

## Core Design Elements

### A. Color Palette

**Light Mode (Primary):**
- **Primary Gold/Accent:** 45 85% 55% (Warm gold for CTAs, highlights, borders)
- **Dark Charcoal:** 0 0% 15% (Headings, primary text)
- **Medium Gray:** 0 0% 45% (Body text, descriptions)
- **Light Background:** 0 0% 98% (Section backgrounds)
- **Pure White:** 0 0% 100% (Cards, overlays)
- **Subtle Gray:** 0 0% 92% (Dividers, borders)

**Accents & States:**
- **Hover Gold:** 45 90% 45% (Darker gold for interactions)
- **Success Green:** 142 70% 45% (Form confirmations)
- **Error Red:** 0 85% 60% (Form errors)

### B. Typography

**Font Stack:**
- **Primary (Headings):** 'Playfair Display', serif or 'Cormorant Garamond', serif via Google Fonts
- **Secondary (Body):** 'Montserrat', sans-serif or 'Open Sans', sans-serif via Google Fonts
- **Accent (Captions):** 'Raleway', sans-serif via Google Fonts

**Type Scale:**
- Hero headline: text-6xl md:text-7xl lg:text-8xl font-bold (Playfair Display)
- Section titles: text-4xl md:text-5xl font-bold
- Subsection headers: text-2xl md:text-3xl font-semibold
- Card titles: text-xl md:text-2xl font-semibold
- Body text: text-base md:text-lg
- Captions/Labels: text-xs md:text-sm uppercase tracking-widest (SMALL CAPS style)

### C. Layout System

**Spacing Primitives:** Use Tailwind units of 4, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 md:py-24 lg:py-32
- Container spacing: px-4 md:px-8 lg:px-12
- Card gaps: gap-6 md:gap-8 lg:gap-12
- Element spacing: space-y-4 md:space-y-6

**Grid Systems:**
- Portfolio grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Service cards: grid-cols-1 md:grid-cols-3
- Process steps: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Blog posts: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

**Max Widths:**
- Full sections: w-full
- Content containers: max-w-7xl mx-auto
- Text content: max-w-4xl
- Narrow content: max-w-2xl

### D. Component Library

**Navigation:**
- Transparent header on hero with white text, becomes solid white with shadow on scroll
- Logo left-aligned, menu centered, CTA button right-aligned
- Mega menu dropdowns with multi-column layouts for Kitchen/Projects sections
- Mobile: Full-screen overlay menu with stacked navigation

**Hero Section:**
- Full viewport height (min-h-screen) with background image overlay
- Large animated headline with staggered letter animation
- Gold underline accent on key words
- Dual CTAs: primary gold button + secondary outline button with backdrop blur
- Subtle parallax scroll effect on background

**Cards:**
- Service Cards: Image top, icon overlay, title, description, gold border on hover
- Portfolio Cards: Full image with overlay gradient, category label top-left, title bottom, zoom effect on hover
- Blog Cards: Featured image, date badge, category tag, title, excerpt, "Read More" link with arrow
- Testimonial Cards: Circular avatar, quote text, name/title, company, rotating carousel

**Forms:**
- Contact Form: Two-column layout (name/email in row, message full-width)
- Newsletter: Inline input with gold submit button
- Admin Forms: Clean labels, full-width inputs, validation states with color feedback

**Interactive Elements:**
- Before/After Slider: Draggable center handle with image comparison
- Video Modal: Click thumbnail opens fullscreen player with close button
- 360° Preview: Placeholder frame with "Click to Load" overlay
- Image Carousel: Dots navigation, arrow controls, auto-advance with pause on hover
- Tab System: Underline indicator, smooth content transitions

**Process Timeline:**
- Horizontal on desktop, vertical on mobile
- Numbered steps with connecting line
- Image + title + description for each step
- Gold number badges with white text

**Statistics Counter:**
- Three columns: Years/Customers/Designs
- Animated count-up on scroll into view
- Large numbers with small labels beneath
- Centered alignment

**Footer:**
- Three-column layout: Company info + Quick links + Newsletter
- Social icons with gold hover states
- Copyright and credits row at bottom
- Dark background (0 0% 10%) with white text

### E. Images & Media

**Hero Images:**
- Full-bleed luxury kitchen photography (modern, bright spaces)
- Minimum 1920x1080px, optimized for web
- Dark overlay (rgba(0,0,0,0.3)) for text readability

**Portfolio Images:**
- High-quality kitchen installations (various styles: modern, traditional, minimalist)
- 16:10 or 4:3 aspect ratio for consistency
- Hover zoom effect (scale-105 transition)

**Blog Featured Images:**
- Kitchen design inspiration photos
- 3:2 aspect ratio for cards
- Lazy loading implementation

**Icon Strategy:**
- Use Heroicons for UI elements (arrows, close, menu)
- Custom kitchen-related icons for services (cabinets, appliances, lighting)
- SVG format for scalability

**Video Placeholders:**
- Kitchen tour videos, installation timelapses
- Vimeo/YouTube embed support
- Thumbnail with play button overlay

## Page-Specific Layouts

**Homepage Sections (In Order):**
1. Hero slider with 3-4 rotating images and animated headlines
2. Features strip with 3 icon-based highlights
3. About section: Image left, content right (2-column)
4. Services grid: 3 cards with images
5. Process timeline: 4 steps horizontal
6. Video section: Background image with centered play button
7. Tabs section: 360° preview, Before/After, Content tabs
8. Download CTA: Full-width gold background strip
9. Testimonials carousel: 4 rotating reviews
10. Statistics counter: 3 metrics
11. Portfolio carousel: Infinite loop of 5+ projects
12. Latest news: 3 recent blog posts

**Portfolio Detail Page:**
- Hero image with project title overlay
- Two-column layout: Project details sidebar + Image gallery main
- Related projects carousel at bottom

**Blog Post Page:**
- Featured image hero
- Single column content with max-w-3xl
- Sidebar: Categories, Recent posts, Tags
- Social sharing buttons

**Admin Panel:**
- Dark sidebar navigation (0 0% 12%)
- White content area
- Data tables with search, filter, pagination
- Form pages with section grouping
- Image upload with preview
- Rich text editor for blog content

## Animations & Interactions

**Scroll Animations:**
- Fade-in on viewport entry for sections
- Slide-up for cards and content blocks
- Counter animation for statistics
- Parallax effect on hero backgrounds (subtle)

**Hover States:**
- Cards: Shadow elevation increase, scale-105 transform
- Buttons: Background color shift, scale-102
- Images: Brightness increase, scale-110 zoom
- Links: Gold underline slide-in animation

**Page Transitions:**
- Smooth fade between pages (200ms)
- No excessive motion to maintain luxury feel

## Responsive Breakpoints

- Mobile: < 768px (Stack all columns, full-width elements)
- Tablet: 768px - 1024px (2-column grids, reduced spacing)
- Desktop: > 1024px (Full layouts, optimal spacing)
- Wide: > 1440px (Max-width constraints, centered content)

## SEO & Performance

- Semantic HTML5 structure
- Dynamic meta tags per page
- Structured data for projects and articles
- Lazy loading for images below fold
- Optimized image formats (WebP with fallback)
- Sitemap generation for all pages