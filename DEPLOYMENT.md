# Sacred Steps - Vercel Deployment Guide

## ✅ Fixed Configuration Issues

The deployment configuration has been updated to resolve the "Conflicting functions and builds" error:

- ❌ Removed `builds` property (deprecated)
- ✅ Using only `functions` property (recommended)
- ✅ Simplified API handlers
- ✅ Added `@vercel/node` dependency

## Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/sacred-steps-landing)

## Manual Deployment Steps

### 1. Prerequisites
- Node.js 18+ installed
- Vercel account
- Git repository

### 2. Deployment Steps

1. **Deploy via GitHub** (Recommended):
   - Push your code to GitHub
   - Connect your GitHub repo to Vercel
   - Vercel will automatically deploy

2. **Deploy via CLI**:
   ```bash
   npm install -g vercel
   vercel
   ```

### 3. Build Configuration

The project uses these build settings:
- **Build Command**: `npm run vercel-build`
- **Output Directory**: `dist/public`
- **Install Command**: `npm install`
- **Node.js Version**: 18.x (recommended)

### 4. Environment Variables

Set these in your Vercel dashboard under "Environment Variables":

```
NODE_ENV=production
```

Add any additional environment variables your app needs.

## Project Structure for Vercel

```
sacred-steps-landing/
├── client/           # React frontend
│   ├── src/
│   ├── index.html
│   └── package.json
├── api/              # Vercel serverless functions
│   └── index.ts      # Main API handler
├── dist/             # Build output
│   └── public/       # Static files
├── vercel.json       # Vercel configuration
└── package.json      # Root package.json
```

## API Functions

The project includes a serverless API function at `/api` that handles:
- Health check (`GET /api`)
- Waitlist signup (`POST /api/waitlist`)
- CORS headers for frontend integration

## Troubleshooting

### Build Errors
- ✅ Fixed: Conflicting functions/builds configuration
- ✅ Fixed: Missing TypeScript dependencies
- ✅ Verified: Build process completes successfully

### Common Issues
1. **"Conflicting functions and builds"** - Fixed by removing `builds` property
2. **TypeScript errors** - Fixed by adding `@vercel/node` dependency
3. **Output directory mismatch** - Fixed by matching Vite config

### Asset Loading
- Favicon files are properly bundled in the build
- Static assets are served from `/assets/` path
- Routing is handled by the SPA rewrite rule

## Features Included

✅ React + TypeScript frontend
✅ Framer Motion animations  
✅ Tailwind CSS styling
✅ Responsive design
✅ Interactive demo section
✅ Dynamic question system
✅ Favicon integration
✅ Professional footer
✅ Serverless API functions
✅ Optimized for Vercel deployment

## Performance Optimizations

- Code splitting with Vite
- Optimized bundle size (~256KB main bundle)
- Static asset optimization
- Serverless function deployment
- CDN delivery via Vercel
- Gzip compression enabled

## Deployment Status

✅ Configuration validated
✅ Build process tested
✅ Dependencies installed  
✅ API functions ready
✅ Ready for production deployment

## Support

For deployment issues:
1. Check Vercel build logs
2. Review error messages in dashboard
3. Verify all dependencies are installed
4. Test locally with `npm run vercel-build`
