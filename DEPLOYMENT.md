# Sacred Steps - Vercel Deployment Guide

## Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/sacred-steps-landing)

## Manual Deployment Steps

### 1. Prerequisites
- Node.js 18+ installed
- Vercel account
- Git repository

### 2. Deployment Steps

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy via GitHub**:
   - Push your code to GitHub
   - Connect your GitHub repo to Vercel
   - Vercel will automatically deploy

3. **Deploy via CLI**:
   ```bash
   vercel
   ```

### 3. Environment Variables

Set these in your Vercel dashboard under "Environment Variables":

```
NODE_ENV=production
```

Add any additional environment variables your app needs.

### 4. Build Configuration

The project uses these build settings:
- **Framework Preset**: Vite
- **Build Command**: `npm run vercel-build`
- **Output Directory**: `dist/public`
- **Install Command**: `npm install`

### 5. Domain Setup

1. Go to your Vercel dashboard
2. Select your project
3. Go to "Domains" tab
4. Add your custom domain

## Project Structure for Vercel

```
sacred-steps-landing/
├── client/           # React frontend
│   ├── src/
│   ├── index.html
│   └── package.json
├── api/              # Vercel serverless functions
├── dist/             # Build output
├── vercel.json       # Vercel configuration
└── package.json      # Root package.json
```

## Troubleshooting

### Build Errors
- Check that all dependencies are in `package.json`
- Ensure TypeScript compilation is successful
- Verify Vite build completes without errors

### Runtime Errors
- Check Vercel function logs
- Verify environment variables are set
- Ensure API routes are properly configured

### Asset Loading Issues
- Verify favicon files are in `client/favicon/`
- Check static asset paths in code
- Ensure proper routing in `vercel.json`

## Features Included

✅ React + TypeScript frontend
✅ Framer Motion animations
✅ Tailwind CSS styling
✅ Responsive design
✅ Interactive demo section
✅ Dynamic question system
✅ Favicon integration
✅ Professional footer
✅ Optimized for Vercel deployment

## Performance Optimizations

- Code splitting with Vite
- Optimized bundle size
- Static asset optimization
- Serverless function deployment
- CDN delivery via Vercel

## Support

For deployment issues:
1. Check Vercel build logs
2. Review error messages
3. Verify configuration files
4. Test locally with `npm run build`
