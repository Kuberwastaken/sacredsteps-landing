import type { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';
import { registerRoutes } from '../server/routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Register all API routes
registerRoutes(app);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Convert Vercel request/response to Express format
  const expressReq = req as any;
  const expressRes = res as any;
  
  expressReq.url = req.url?.replace('/api', '') || '/';
  expressReq.path = expressReq.url;
  
  app(expressReq, expressRes);
}
