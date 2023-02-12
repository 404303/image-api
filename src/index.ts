import express, { Request, Response, Router } from 'express';
import routes from './routes/routes';

const app = express();
const port = 3000; // default port

// Add routes
app.use(routes);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Image-api-process');
});

app.listen(port, () => {
  console.log(`Server is Listing on http://localhost:${port}`);
});
export default app;
