// Simple API handler for Sacred Steps
export default async function handler(req: any, res: any) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Simple API handler for Sacred Steps
  if (req.method === 'GET' && req.url === '/api') {
    res.status(200).json({ 
      message: 'Sacred Steps API is running',
      timestamp: new Date().toISOString()
    });
    return;
  }

  // Handle waitlist signup
  if (req.method === 'POST' && req.url === '/api/waitlist') {
    const { email } = req.body;
    
    if (!email || !email.includes('@')) {
      res.status(400).json({ error: 'Valid email is required' });
      return;
    }
    
    // In a real app, you'd save this to a database
    res.status(200).json({ 
      success: true, 
      message: 'Successfully joined waitlist!',
      email: email
    });
    return;
  }

  // Default 404 response
  res.status(404).json({ error: 'API route not found' });
}
