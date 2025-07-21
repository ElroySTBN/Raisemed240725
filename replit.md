# replit.md

## Overview

This is a French inbound marketing agency website built with a modern full-stack architecture. The application showcases RaiseMed.IA, an agency that specializes in generating leads for local businesses through data-driven inbound marketing strategies combined with artificial intelligence tools. The site targets B2C businesses like medical practices, real estate agencies, artisans, and health professionals, presenting inbound marketing as a revolutionary alternative to traditional advertising methods.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### January 21, 2025
- Added advanced ScrollTrigger animations and creative scroll effects throughout the website:
  - Enhanced ScrollAnimations.tsx with 9 new animation types: revealUp, morphIn, slideRotate, elastic, typewriter, magneticReveal, liquidDrop, prismShift
  - Created ScrollTriggerEffects.tsx with professional components: ParallaxScroll, RevealText, MagneticElement, AnimatedCounter, Rotating3DCard, ElasticEntrance, TypewriterText, FloatingElements, PerspectiveCard
  - Updated hero section with morphing gradient background, floating elements, magnetic buttons, and 3D perspective image
  - Enhanced services section with 3D rotating cards, elastic entrances, and magnetic elements
  - Improved methodology section with text reveal animations and sliding text effects  
  - Upgraded testimonials with perspective cards, parallax backgrounds, and enhanced floating elements
  - Added custom CSS animations for 3D effects, liquid morphing, glow effects, and enhanced hover states
  - Implemented smooth scrolling and professional cubic-bezier easing curves throughout
- Fixed white-on-white button visibility issues across multiple pages
- Corrected header navigation to properly redirect to homepage sections instead of creating duplicate pages
- Removed opacity from client logos in trust indicators section for better visibility
- Fixed image path encoding for "Logo Pharma MC - SBG" with spaces in filename

### January 20, 2025
- Fixed "Voir une Démo" button visibility by adding `bg-transparent` class
- Updated hero section text to be more corporate and concise: "Transformez votre expertise en croissance durable. Solutions inbound marketing sur mesure pour entreprises locales."
- Added real client logos in trust indicators section (Pharmacie Bergère, Century 21, Supra Sécurité, La Vaux Immobilier, Optic 2000)
- Created dedicated case studies page at `/cas-clients` with detailed success stories
- Updated navigation to link to case studies page
- Fixed LSP diagnostics errors in storage and contact form
- Changed button texts: "Voir une Démo" → "Obtenir un Audit GRATUIT", "Démarrer Mon Projet" → "Démarrer maintenant"
- Updated metrics: "+300% leads" → "+500k€ générés", added "4 pays desservis"
- Anonymized all client testimonials and case studies
- Created complete blog functionality with individual article pages
- Added individual detailed case study pages with timeline and expanded metrics
- Integrated RaiseMed.IA logo in header with homepage navigation
- Added audit gratuit buttons across all pages

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite for development and production builds
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM
- **Database**: PostgreSQL (configured for Neon Database)
- **Validation**: Zod schemas shared between client and server

### UI Component System
- **Design System**: shadcn/ui components built on Radix UI primitives
- **Theme**: Custom color scheme with CSS variables for light/dark mode support
- **Icons**: Lucide React icon library
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Key Components

### Shared Schema (`shared/schema.ts`)
- Centralized data models using Drizzle ORM
- Contact form schema with Zod validation
- Type-safe database operations with TypeScript inference

### Frontend Sections
- **Hero Section**: Main value proposition with call-to-action
- **Trust Indicators**: Client testimonials and success metrics
- **Problem/Solution**: Pain points and inbound marketing benefits
- **Services**: Three-tier service offering (Attraction, AI/Automation, Analytics)
- **Methodology**: Four-step inbound process explanation
- **Case Studies**: Client success stories with metrics
- **Why Choose Us**: Competitive advantages
- **Testimonials**: Customer reviews with ratings
- **Blog**: Latest articles and thought leadership
- **CTA**: Conversion-focused call-to-action section
- **Contact Form**: Lead capture with validation

### Backend API
- **Contact Management**: POST/GET endpoints for lead capture
- **Error Handling**: Centralized error middleware
- **Validation**: Server-side Zod schema validation
- **Storage**: In-memory storage implementation (ready for database integration)

## Data Flow

1. **Contact Form Submission**:
   - Client-side validation with React Hook Form + Zod
   - API request to `/api/contacts` endpoint
   - Server-side validation and storage
   - Success/error feedback via toast notifications

2. **Content Rendering**:
   - Static React components for marketing sections
   - Smooth scrolling navigation between sections
   - Responsive image optimization

3. **State Management**:
   - TanStack Query for API state management
   - React Hook Form for form state
   - Local component state for UI interactions

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM, React Router via Wouter)
- Express.js for server framework
- Drizzle ORM for database operations
- TanStack Query for data fetching

### UI and Styling
- Tailwind CSS for utility-first styling
- Radix UI primitives for accessible components
- Lucide React for consistent iconography
- Custom CSS variables for theming

### Development Tools
- Vite for fast development and building
- TypeScript for type safety
- ESBuild for server bundling
- PostCSS for CSS processing

### Database and Validation
- @neondatabase/serverless for PostgreSQL connection
- Zod for runtime type validation
- Drizzle Kit for database migrations

## Deployment Strategy

### Development Environment
- Vite dev server for frontend hot reloading
- Express server with middleware for API routes
- In-memory storage for rapid prototyping
- Replit-specific development tools integration

### Production Build Process
1. Frontend build with Vite (outputs to `dist/public`)
2. Server build with ESBuild (outputs to `dist`)
3. Static file serving from Express server
4. Environment-based configuration

### Database Setup
- Drizzle configuration points to PostgreSQL
- Database URL from environment variables
- Migration system ready via `db:push` script
- Schema changes tracked in `migrations/` directory

### Hosting Considerations
- Single deployment artifact with frontend and backend
- Environment variable configuration for database connection
- Static asset optimization through Vite build process
- CORS and security middleware configured for production

The architecture supports easy scaling from development to production while maintaining type safety throughout the full stack. The modular component structure allows for easy maintenance and feature additions.