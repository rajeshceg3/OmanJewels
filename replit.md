# Oman Tourism Discovery Platform

## Overview

This is a React-based tourism application showcasing destinations in Oman. The application provides an interactive map experience where users can explore various cultural, natural, and historical destinations throughout the Sultanate of Oman. Built with modern web technologies, it features a rich UI with glass morphism design elements, destination details, and an immersive user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Design System**: Glass morphism effects with Oman-inspired color palette (desert gold, ocean turquoise, mountain sage)

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **API Pattern**: RESTful API endpoints under `/api` prefix
- **Data Layer**: In-memory storage implementation with interface-based design for future database integration
- **Development**: Hot module replacement with Vite integration in development mode

### Component Organization
- **Layout Components**: Header and footer with fixed positioning and glass morphism effects
- **Feature Components**: Interactive map, destination grid, destination sidebar with animations
- **UI Components**: Comprehensive shadcn/ui component library including forms, modals, tooltips
- **Hooks**: Custom hooks for mobile detection and toast notifications

### Database Schema Design
- **Destinations Model**: Contains id, name, coordinates, category, description, image URL, and highlights array
- **Schema Validation**: Zod schemas for type-safe data validation
- **Future Database**: Drizzle ORM configured for PostgreSQL integration

### Styling and Theming
- **CSS Architecture**: Utility-first approach with Tailwind CSS
- **Custom Properties**: CSS variables for consistent theming across light/dark modes
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Animation**: Framer Motion for smooth transitions and micro-interactions

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form with Zod resolvers
- **Build Tools**: Vite with TypeScript support and React plugin
- **Development**: ESBuild for production builds, TSX for development server

### UI and Design Libraries
- **Component Library**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Icons**: Lucide React for consistent iconography
- **Animations**: Framer Motion for smooth transitions

### Data and State Management
- **Server State**: TanStack Query for API data fetching and caching
- **HTTP Client**: Native Fetch API with custom request wrapper
- **Validation**: Zod for schema validation and type inference

### Map Integration
- **Mapping**: Leaflet.js dynamically loaded for interactive maps
- **Geospatial Data**: Coordinate-based destination mapping

### Database and ORM (Configured)
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: Neon Database (serverless PostgreSQL)
- **Migrations**: Drizzle Kit for database schema management
- **Session Storage**: Connect-pg-simple for PostgreSQL session storage

### Development and Quality Tools
- **TypeScript**: Full type safety with strict configuration
- **Replit Integration**: Vite plugins for Replit environment support
- **Error Handling**: Runtime error overlay for development debugging

### Utility Libraries
- **Styling Utilities**: clsx and class-variance-authority for conditional CSS classes
- **Date Handling**: date-fns for date manipulation and formatting
- **UI Enhancements**: Embla Carousel for image carousels, CMDK for command palette functionality