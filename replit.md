# praygo - Religious Education Platform

## Overview

praygo is a gamified learning platform designed to make exploring world religions accessible, engaging, and rewarding for learners of all backgrounds. The application is built as a modern full-stack web application with a React frontend, Express.js backend, and PostgreSQL database using Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for RESTful API endpoints
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Validation**: Zod schemas for request/response validation
- **Session Storage**: Currently using in-memory storage with interface for database implementation

### Database Design
- **Primary Database**: PostgreSQL (configured via Drizzle)
- **Connection**: Neon Database serverless connection
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Tables**:
  - `users`: User authentication and profiles
  - `waitlist_entries`: Email collection for launch waitlist

## Key Components

### Frontend Components
- **Navigation**: Sticky header with smooth scroll navigation
- **Hero Section**: Landing page with call-to-action
- **Features Section**: Interactive showcase of platform capabilities
- **Demo Section**: Interactive lesson preview with quiz functionality
- **Waitlist Section**: Email capture form with validation
- **FAQ Section**: Collapsible questions and answers

### Backend Services
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **API Routes**: RESTful endpoints for waitlist management
- **Error Handling**: Centralized error handling middleware
- **Request Logging**: Detailed API request/response logging

### Shared Components
- **Schema Definitions**: Shared Zod schemas and TypeScript types
- **Database Models**: Drizzle table definitions and type inference

## Data Flow

1. **User Interaction**: Users interact with React components
2. **Form Submission**: React Hook Form validates using Zod schemas
3. **API Calls**: TanStack Query manages HTTP requests to Express backend
4. **Data Validation**: Backend validates requests using shared Zod schemas
5. **Database Operations**: Drizzle ORM handles type-safe database queries
6. **Response Handling**: Frontend updates UI based on API responses

## External Dependencies

### UI and Styling
- **Radix UI**: Headless UI primitives for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for interactive elements
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **TypeScript**: Type safety across the entire stack
- **ESBuild**: Fast JavaScript bundler for production
- **PostCSS**: CSS processing with Autoprefixer
- **Replit Integration**: Development environment optimization

### Database and Validation
- **Neon Database**: Serverless PostgreSQL provider
- **Drizzle ORM**: Type-safe database toolkit
- **Zod**: Schema validation library

## Deployment Strategy

### Development Environment
- **Dev Server**: Vite development server with HMR
- **Backend**: tsx for TypeScript execution with hot reload
- **Database**: Connected to Neon serverless PostgreSQL

### Production Build
- **Frontend**: Vite builds static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Deployment**: Single Node.js process serving both API and static files

### Environment Configuration
- **Database**: Uses `DATABASE_URL` environment variable
- **Build Process**: Separate build steps for frontend and backend
- **Static Serving**: Express serves built frontend assets in production

The architecture emphasizes type safety, developer experience, and scalability while maintaining a clean separation of concerns between frontend, backend, and database layers.