# Overview

MULTIMEDIA AGRONDESIGN is a professional multimedia services portfolio website built as a modern, full-stack web application. The website serves as a digital portfolio showcasing services including web design, graphic design, video production, digital marketing, and mobile app development for Android and iOS. It's designed to attract potential clients and provide a professional online presence for the multimedia agency. The application features a comprehensive contact system, blog functionality, service showcases, and a responsive design optimized for all devices.

## Recent Changes (January 2025)
- Complete rebranding from "AGR Multimedia" to "MULTIMEDIA AGRONDESIGN" across all 4 languages
- Updated footer with new contact details: Phone (+49 15560 873124), Email (agron6922@gmail.com), Location (Geislingen an der Steige, Germany)
- Removed social media icons from footer (Facebook, Instagram, LinkedIn)
- Successfully deployed to production domain agrmultimedia.eu via Replit Deployments
- All content converted to first-person singular format (individual work, not team)
- Contact form saves to database successfully, email delivery pending SendGrid configuration
- **Impresum (Legal Notice) page fully implemented**: Complete German legal compliance page with all 4 languages (Serbian, English, German, Albanian), professional design, all business details included (Tax Number: 48267305956, VAT: DE354016444), accessible via footer link /impresum
- **Graphic Design service page fully completed**: Complete /graphic-design page with 3 custom logos (InnovateTech, GreenHarvest, AurumCraft), 2 branding packages (PowerFit Pro, Aroma Collective), print materials mockups, book design showcase, and user's MULTIMEDIA AGRONDESIGN logos integration
- **Web Design portfolio updated**: Replaced SmartHome Control with ILMBUDS Islamic children's app across all 4 languages, added real ILMBUDS banner image with proper responsive display using object-contain CSS
- **Photography service page fully completed**: Complete /photography page featuring user's 5 movie posters (Ragazzo con Lanterne, Il Silenzio del Boss, Kong, Gardijan, Abandoned) displayed in full size using object-contain, comprehensive 4-language support for all services (professional photography, photo restoration, photomontages, movie posters), corrected Serbian text ("Fotomontaža" instead of "Photomontaža", "restauriram" spelling fix)

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with Shadcn/UI component system for consistent, modern design
- **State Management**: TanStack React Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Components**: Extensive use of Radix UI primitives through Shadcn/UI for accessible, customizable components

## Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful API structure with focused endpoints for contact management
- **Data Storage**: In-memory storage with interfaces designed for easy database migration
- **Request Handling**: Express middleware for JSON parsing, logging, and error handling

## Database Architecture
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe schema definitions
- **Schema Design**: Clean separation between users and contacts tables with proper relationships
- **Validation**: Zod schemas for runtime type validation integrated with Drizzle
- **Migrations**: Drizzle Kit for database schema management and version control

## Styling and Design System
- **Design Tokens**: CSS custom properties for consistent theming and dark mode support
- **Component Library**: Shadcn/UI providing pre-built, accessible components
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Typography**: Inter font family for modern, readable text across all devices
- **Color Scheme**: Professional color palette with navy, electric blue, and warm gray tones

## Development and Deployment
- **Development Server**: Vite dev server with HMR for fast iteration
- **Build Process**: Separate client and server builds optimized for production
- **TypeScript Configuration**: Strict type checking with path aliases for clean imports
- **Code Organization**: Clear separation of client, server, and shared code

# External Dependencies

## Core Frontend Dependencies
- **React Ecosystem**: React 18, React DOM for the core UI framework
- **TanStack React Query**: Server state management, caching, and data synchronization
- **Wouter**: Lightweight routing solution for single-page application navigation
- **React Hook Form**: Form state management with performance optimizations
- **Hookform Resolvers**: Integration layer for form validation with Zod schemas

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Radix UI**: Comprehensive collection of accessible, headless UI components
- **Shadcn/UI**: Pre-styled component system built on Radix UI primitives
- **Class Variance Authority**: Utility for creating variant-based component APIs
- **Clsx & Tailwind Merge**: Class name utilities for conditional and merged styling

## Backend Framework
- **Express.js**: Web application framework for Node.js server implementation
- **Drizzle ORM**: Type-safe ORM for database operations and schema management
- **Zod**: Runtime type validation and schema definition library
- **Date-fns**: Date manipulation and formatting utilities

## Database and Storage
- **PostgreSQL**: Primary database configured through Drizzle ORM
- **Neon Database**: Serverless PostgreSQL provider for cloud deployment
- **Connect PG Simple**: PostgreSQL session store for Express sessions

## Development Tools
- **Vite**: Build tool and development server with HMR capabilities
- **TypeScript**: Static type checking for enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for server-side builds
- **PostCSS & Autoprefixer**: CSS processing and vendor prefix automation

## Analytics and Monitoring
- **Google Analytics**: Web analytics integration for user behavior tracking
- **Custom Analytics Hooks**: React hooks for tracking page views and user interactions

## Additional Utilities
- **Lucide React**: Icon library with consistent, scalable SVG icons
- **Embla Carousel**: Touch-friendly carousel component for content display
- **Nanoid**: Secure, URL-friendly unique ID generator
- **CMDK**: Command palette component for enhanced user interactions