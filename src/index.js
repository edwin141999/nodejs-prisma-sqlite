import express from 'express';
import categoriesRoutes from './routes/categories.routes.js';
import productsRoutes from './routes/products.routes.js';

const app = express();

app.use(express.json())
app.use('/api', productsRoutes)
app.use('/api', categoriesRoutes)

app.listen(3000)
console.log('Server on port', 3000);